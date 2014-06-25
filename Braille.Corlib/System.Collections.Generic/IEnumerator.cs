using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System.Collections.Generic
{
    public interface IEnumerator<T> : IEnumerator, IDisposable
    {
        T Current { get; }
        bool MoveNext();
    }
}
