using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.MethodTransform
{
    class InsertLabelsTask
    {
        public void Process(IList<OpExpression> opExpressions)
        {
            InternalProcess(opExpressions);
        }

        private void InternalProcess(IList<OpExpression> opExpressions)
        {
            foreach (var f in opExpressions)
            {
                switch (f.Instruction.OpCode.Name)
                {
                    case "br":
                    case "br.s":
                    case "beq":
                    case "beq.s":
                    case "bge":
                    case "bge.s":
                    case "bgt":
                    case "bgt.s":
                    case "ble":
                    case "ble.s":
                    case "blt":
                    case "blt.s":
                    case "bne":
                    case "bne.s":
                    case "brtrue":
                    case "brfalse":
                        {
                            var targetPosition = GetTargetPosition(f.Instruction);
                            var targetFrame = opExpressions.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                    case "switch":
                        var i = f.Instruction;
                        var switchEndPosition = 1 + i.Position + i.Size;
                        var frameAfterSwitch = opExpressions.Where(f2 => f2.ContainsPosition(switchEndPosition)).First();
                        frameAfterSwitch.IsLabel = true;
                        foreach (var targetOffset in (int[])f.Instruction.Data)
                        {
                            var targetPosition = 1 + i.Position + i.Size + targetOffset;
                            var targetFrame = opExpressions.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                }
            }
        }

        private int GetTargetPosition(OpInstruction i)
        {
            int data;
            if (i.Data is byte)
                return (1 + i.Position + i.Size + (sbyte)(byte)i.Data);
            else
                return 1 + i.Position + i.Size + (int)i.Data;
        }

    }
}