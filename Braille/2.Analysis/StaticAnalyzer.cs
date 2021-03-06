﻿using Braille.Analysis.Passes;
using Braille.Ast;
using Braille.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Analysis
{
    class StaticAnalyzer
    {
        private Context ctx;
        
        public StaticAnalyzer(Context ctx)
        {
            this.ctx = ctx;
        }
        
        public void Analyze(CilAssembly asm)
        {
            foreach (var t in asm.Types)
            {
                if (t.IsIgnored || t.IsUserDelegate)
                    continue;

                foreach (var method in t.Methods)
                {
                    if (method.NeedTranslation && method.GetReplacement() == null)
                    {
                        foreach (var rewriter in GetPasses())
                        {
                            rewriter.Run(method);
                        }
                    }
                }
            }
        }

        public IEnumerable<IAnalysisPass> GetPasses()
        {
            yield return new OpExpressionBuilder(ctx);

            // - Flow analysis to determine from which instruction(s) each instruction can get its argument(s) from
            yield return new StackAnalyzer();

            yield return new StackRemovalPass();

            yield return new UnreachableRemoval();
            yield return new LocalsAnalyzer();
            yield return new TypeInference(ctx);
            yield return new TypeUsageAnalysis(ctx);
            yield return new InsertLabelsPass();
            
            yield return new CreateBlocksPass();
            yield return new AggregateBlocksPass();

            if (ctx.Settings.KeepFlatExpressions == false)
                yield return new AggregateExpressionsPass(ctx);

            yield return new StaticFieldUsageAnalysis(ctx);
        }

    }
}
