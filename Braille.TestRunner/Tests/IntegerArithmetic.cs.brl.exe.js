var asm1; (function (asm)
{
    asm.FullName = "IntegerArithmetic.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000c = function Main()
    {
        /* IL_00: ldc.i4.0 */
        /* IL_01: call Void X(System.Int32)*/
        (asm1.x600000d)((0|0));
        /* IL_06: ldc.i4.1 */
        /* IL_07: call Void X(System.Int32)*/
        (asm1.x600000d)((1|0));
        /* IL_0C: ldc.i4.2 */
        /* IL_0D: call Void X(System.Int32)*/
        (asm1.x600000d)((2|0));
        /* IL_12: ldc.i4.3 */
        /* IL_13: call Void X(System.Int32)*/
        (asm1.x600000d)((3|0));
        /* IL_18: ret */
        return ;
    };;
    /* static Void X(System.Int32)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function X(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: div */
        /* IL_03: box System.Int32*/
        /* IL_08: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (arg0 / (1|0)) | (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldc.i4.2 */
        /* IL_0F: div */
        /* IL_10: box System.Int32*/
        /* IL_15: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (arg0 / (2|0)) | (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1A: ldarg.0 */
        /* IL_1B: ldc.i4.3 */
        /* IL_1C: div */
        /* IL_1D: box System.Int32*/
        /* IL_22: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (arg0 / (3|0)) | (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_27: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                (BLR.declare_virtual)(TestLog,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestLog,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestLog,"asm0.x6000009","asm0.x6000009");
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                (BLR.declare_virtual)(TestHelper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000009","asm0.x6000009");
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
