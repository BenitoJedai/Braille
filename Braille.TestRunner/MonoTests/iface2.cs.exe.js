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
asm.x6000001 = function () { 
  };
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000003 = function () { 
  };
asm.x6000005 = function () { 
  };
asm.x6000006 = function () { 
  };
asm.x6000004 = function () { 
  };
asm.x6000007 = function () { 
  };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000009 = function () { 
  };
asm.x600000a = function () { 
  };
asm.x600000b = function () { 
  };
asm.x600000c = function () { 
  };
asm.x600000d = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 5;
/* IL_01: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x600000e = function IA_Add2() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 6;
/* IL_01: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x600000f = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 7;
/* IL_01: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x6000010 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000011 = function IC_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 8;
/* IL_01: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x6000012 = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 9*/
st_00 = 9;
/* IL_02: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x6000013 = function IA_Add2() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 10*/
st_00 = 10;
/* IL_02: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x6000014 = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 11*/
st_00 = 11;
/* IL_02: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x6000015 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000016 = function Test() { var __braille_args__;
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
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode */
st_01 = 0;
/* IL_02: IKVM.Reflection.Emit.OpCode Int32 Add2(System.Int32)*/
st_02 = (st_00.IA.x600000a)(st_00,st_01);
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_03 = 6;
/* IL_08: IKVM.Reflection.Emit.OpCode IL_0C*/
if (st_02 === st_03){
__braille_pos_0__ = 0xC;continue;
}
/* IL_0A: IKVM.Reflection.Emit.OpCode */
st_04 = 1;
/* IL_0B: IKVM.Reflection.Emit.OpCode */
return st_04;
case 0xC:
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_05 = __braille_args__[0];
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_06 = 0;
/* IL_0E: IKVM.Reflection.Emit.OpCode Int32 Add(System.Int32)*/
st_07 = (st_05.IB.x600000b)(st_05,st_06);
/* IL_13: IKVM.Reflection.Emit.OpCode */
st_08 = 7;
/* IL_14: IKVM.Reflection.Emit.OpCode IL_18*/
if (st_07 === st_08){
__braille_pos_0__ = 0x18;continue;
}
/* IL_16: IKVM.Reflection.Emit.OpCode */
st_09 = 1;
/* IL_17: IKVM.Reflection.Emit.OpCode */
return st_09;
case 0x18:
/* IL_18: IKVM.Reflection.Emit.OpCode */
st_0A = 0;
/* IL_19: IKVM.Reflection.Emit.OpCode */
return st_0A;
}
} };
asm.x6000017 = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var __braille_pos_0__;
var loc0;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.D)();
(asm0.x6000010)(result);
return result; })();
/* IL_05: IKVM.Reflection.Emit.OpCode */
loc0 = st_00;
/* IL_06: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.E)();
(asm0.x6000015)(result);
return result; })();
/* IL_0B: IKVM.Reflection.Emit.OpCode */

/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_02 = loc0;
/* IL_0D: IKVM.Reflection.Emit.OpCode Int32 Test(ID)*/
st_03 = (asm0.x6000016)(st_02);
/* IL_12: IKVM.Reflection.Emit.OpCode IL_16*/
if ((!st_03)){
__braille_pos_0__ = 0x16;continue;
}
/* IL_14: IKVM.Reflection.Emit.OpCode */
st_04 = 1;
/* IL_15: IKVM.Reflection.Emit.OpCode */
return st_04;
case 0x16:
/* IL_16: IKVM.Reflection.Emit.OpCode */
st_05 = 0;
/* IL_17: IKVM.Reflection.Emit.OpCode */
return st_05;
}
} };
asm.x6000018 = function _ctor() { var __braille_args__;
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
 function IA() { 
  };
IA.prototype = { 
 
};;
IA.IsValueType = false;
IA.prototype.vtable = { 
'x6000009': asm.x6000009,
'x600000a': asm.x600000a 
};;
return IA; })();
asm.IA = self;
self = (function () { 
 function IB() { 
  };
IB.prototype = { 
 
};;
IB.IsValueType = false;
IB.prototype.vtable = { 
'x600000b': asm.x600000b 
};;
return IB; })();
asm.IB = self;
self = (function () { 
 function IC() { 
  };
IC.prototype = { 
 
};;
IC.IsValueType = false;
IC.prototype.vtable = { 
'x600000c': asm.x600000c 
};;
return IC; })();
asm.IC = self;
self = (function () { 
 function ID() { 
  };
ID.prototype = { 
 
};;
ID.IsValueType = false;
ID.prototype.vtable = { 
 
};;
return ID; })();
asm.ID = self;
self = (function () { 
 function D() { 
  };
D.prototype = { 
 
};;
D.IsValueType = false;
D.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
D.prototype.ID = { 
 
};;
D.prototype.IA = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e 
};;
D.prototype.IB = { 
'x600000b': asm.x600000f 
};;
return D; })();
asm.D = self;
self = (function () { 
 function E() { 
  };
E.prototype = { 
 
};;
E.IsValueType = false;
E.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
E.prototype.IC = { 
'x600000c': asm.x6000011 
};;
E.prototype.ID = { 
 
};;
E.prototype.IA = { 
'x6000009': asm.x6000012,
'x600000a': asm.x6000013 
};;
E.prototype.IB = { 
'x600000b': asm.x6000014 
};;
return E; })();
asm.E = self;
self = (function () { 
 function C() { 
  };
C.prototype = { 
 
};;
C.IsValueType = false;
C.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return C; })();
asm.C = self;
asm.entryPoint = asm.x6000017; })(asm0 || (asm0 = {}))