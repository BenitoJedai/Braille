using Braille.Runtime.TranslatorServices;

namespace System
{
    public static class Activator 
    {
        public static object CreateInstance(Type type) 
        {
            return CreateInstanceImpl(type);
        }

        [JsReplace("(new ({0}.ctor)())")]
        private extern static object CreateInstanceImpl(Type type);
    }
}