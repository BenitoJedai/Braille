﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSSwitchStatement: JSStatement
    {

        public override string ToString()
        {
            return string.Format("switch ({0}) {{\n{1}\n}}", Value.ToString(), string.Join("", Statements));
        }

        public JSIdentifier Value { get; set; }

        public List<JSStatement> Statements { get; set; }
    }
}