﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSContinueExpression : JSExpression
    {
        public override string ToString(Formatting formatting)
        {
            return "continue";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
