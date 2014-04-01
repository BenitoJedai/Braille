var asm0; (function (asm) { var self;
 
function tree_get(a, s) {
    if (a.length == 0) return s;
    var c = s[a[0]];
    return c && tree_get(a.slice(1), c);
}

function tree_set(a, s, v) {
    if (a.length == 1) {
        s[a[0]] = v;
    }
    else {
        var c = s[a[0]];
        if (!c) s[a[0]] = c = {};
        tree_set(a.slice(1), c, v);
    }
}
;
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000009 = function GetEnumerator() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var st_09;
var st_0A;
var st_0B;
var st_0C;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var loc0;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 5;
/* IL_01: IKVM.Reflection.Emit.OpCode System.Int32*/
st_01 = [  ];
/* IL_06: IKVM.Reflection.Emit.OpCode */
loc0 = st_01;
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_02 = loc0;
/* IL_08: IKVM.Reflection.Emit.OpCode */
st_03 = 0;
/* IL_09: IKVM.Reflection.Emit.OpCode */
st_04 = 0;
/* IL_0A: IKVM.Reflection.Emit.OpCode */
(st_02)[st_03] = st_04;
/* IL_0B: IKVM.Reflection.Emit.OpCode */
st_05 = loc0;
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_06 = 1;
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_07 = 1;
/* IL_0E: IKVM.Reflection.Emit.OpCode */
(st_05)[st_06] = st_07;
/* IL_0F: IKVM.Reflection.Emit.OpCode */
st_08 = loc0;
/* IL_10: IKVM.Reflection.Emit.OpCode */
st_09 = 2;
/* IL_11: IKVM.Reflection.Emit.OpCode */
st_0A = 2;
/* IL_12: IKVM.Reflection.Emit.OpCode */
(st_08)[st_09] = st_0A;
/* IL_13: IKVM.Reflection.Emit.OpCode */
st_0B = loc0;
/* IL_14: IKVM.Reflection.Emit.OpCode */
st_0C = 3;
/* IL_15: IKVM.Reflection.Emit.OpCode */
st_0D = 4;
/* IL_16: IKVM.Reflection.Emit.OpCode */
(st_0B)[st_0C] = st_0D;
/* IL_17: IKVM.Reflection.Emit.OpCode */
st_0E = loc0;
/* IL_18: IKVM.Reflection.Emit.OpCode */
st_0F = 4;
/* IL_19: IKVM.Reflection.Emit.OpCode */
st_10 = 8;
/* IL_1A: IKVM.Reflection.Emit.OpCode */
(st_0E)[st_0F] = st_10;
/* IL_1B: IKVM.Reflection.Emit.OpCode */
st_11 = loc0;
/* IL_1C: IKVM.Reflection.Emit.OpCode Void .ctor(System.Int32[])*/
st_12 = (function () { var result;
 result = new (asm0.Iter)();
(asm0.x600000b)(result,st_11);
return result; })();
/* IL_21: IKVM.Reflection.Emit.OpCode */
return st_12; };
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000c = function MoveNext() { var __braille_args__;
var st_00;
var st_01;
var st_06;
var st_02;
var st_03;
var st_04;
var st_05;
var st_07;
var st_0B;
var st_08;
var st_09;
var st_0A;
var st_0C;
var st_0D;
var _b_dup_1;
var _b_dup_9;
var loc0;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode */
st_06 = (st_01 = _b_dup_1 = st_00);
/* IL_02: IKVM.Reflection.Emit.OpCode Int32 i*/
st_02 = st_01.i;
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_03 = 1;
/* IL_08: IKVM.Reflection.Emit.OpCode */
st_04 = (st_02 + st_03);
/* IL_09: IKVM.Reflection.Emit.OpCode */
st_07 = (st_05 = _b_dup_9 = st_04);
/* IL_0A: IKVM.Reflection.Emit.OpCode */
loc0 = st_05;
/* IL_0B: IKVM.Reflection.Emit.OpCode Int32 i*/
st_06.i = st_07;
/* IL_10: IKVM.Reflection.Emit.OpCode */
st_0B = loc0;
/* IL_11: IKVM.Reflection.Emit.OpCode */
st_08 = __braille_args__[0];
/* IL_12: IKVM.Reflection.Emit.OpCode Int32[] nums*/
st_09 = st_08.nums;
/* IL_17: IKVM.Reflection.Emit.OpCode */
st_0A = st_09.length;
/* IL_18: IKVM.Reflection.Emit.OpCode */
st_0C = st_0A;
/* IL_1A: IKVM.Reflection.Emit.OpCode */
st_0D = (st_0B < st_0C) ? (1) : (0);
/* IL_1B: IKVM.Reflection.Emit.OpCode */
return st_0D; };
asm.x600000d = function get_Current() { var __braille_args__;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Int32[] nums*/
st_02 = st_00.nums;
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_01 = __braille_args__[0];
/* IL_07: IKVM.Reflection.Emit.OpCode Int32 i*/
st_03 = st_01.i;
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_04 = (st_02)[st_03];
/* IL_0D: IKVM.Reflection.Emit.OpCode */
return st_04; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode */
st_01 = -1;
/* IL_02: IKVM.Reflection.Emit.OpCode Int32 i*/
st_00.i = st_01;
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_02 = __braille_args__[0];
/* IL_08: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_03 = __braille_args__[0];
/* IL_0E: IKVM.Reflection.Emit.OpCode */
st_04 = __braille_args__[1];
/* IL_0F: IKVM.Reflection.Emit.OpCode Int32[] nums*/
st_03.nums = st_04;
/* IL_14: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000e = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var loc0;
var loc2;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.A)();
(asm0.x600000a)(result);
return result; })();
/* IL_05: IKVM.Reflection.Emit.OpCode */
loc0 = st_00;
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_01 = loc0;
/* IL_07: IKVM.Reflection.Emit.OpCode Iter GetEnumerator()*/
st_02 = (asm0.x6000009)(st_01);
/* IL_0C: IKVM.Reflection.Emit.OpCode */
loc2 = st_02;
try {
__braille_pos_1__ = 0x0;
while (__braille_pos_1__ >= 0){
switch (__braille_pos_1__) {
case 0x0:
/* IL_0D: IKVM.Reflection.Emit.OpCode IL_21*/
__braille_pos_1__ = 0x21;
continue;
case 0xF:
/* IL_0F: IKVM.Reflection.Emit.OpCode */
st_03 = loc2;
/* IL_10: IKVM.Reflection.Emit.OpCode Int32 get_Current()*/
st_04 = (asm0.x600000d)(st_03);
/* IL_15: IKVM.Reflection.Emit.OpCode */
loc1 = st_04;
/* IL_16: IKVM.Reflection.Emit.OpCode */
st_05 = loc1;
/* IL_17: IKVM.Reflection.Emit.OpCode System.Int32*/
st_06 = { 
'boxed': st_05,
'toString': function () { 
 return this.boxed; } 
};
/* IL_1C: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_06);
case 0x21:
/* IL_21: IKVM.Reflection.Emit.OpCode */
st_07 = loc2;
/* IL_22: IKVM.Reflection.Emit.OpCode Boolean MoveNext()*/
st_08 = (asm0.x600000c)(st_07);
/* IL_27: IKVM.Reflection.Emit.OpCode IL_0F*/
if (st_08){
__braille_pos_1__ = 0xF;continue;
}
/* IL_29: IKVM.Reflection.Emit.OpCode IL_3C*/
__braille_pos_1__ = -1;
break;
}
}
}catch (e) {}
/* IL_3C: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
self = (function () { 
 function TestLog() { 
  };
TestLog.prototype = { 
 
};;
TestLog.IsValueType = false;
TestLog.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestLog; })();
asm.TestLog = self;
self = (function () { 
 function TestHelper() { 
  };
TestHelper.prototype = { 
 
};;
TestHelper.IsValueType = false;
TestHelper.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { 
 function A() { 
  };
A.prototype = { 
 
};;
A.IsValueType = false;
A.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return A; })();
asm.A = self;
self = (function () { 
 function Iter() { 
  };
Iter.prototype = { 
 
};;
Iter.IsValueType = false;
Iter.prototype.i = 0;;
Iter.prototype.nums = null;;
Iter.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Iter; })();
asm.Iter = self;
self = (function () { 
 function Program() { 
  };
Program.prototype = { 
 
};;
Program.IsValueType = false;
Program.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x600000e; })(asm0 || (asm0 = {}))