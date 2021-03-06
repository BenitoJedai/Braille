﻿using Braille.Ast;
using Braille.Loading.Model;
using IKVM.Reflection;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Loading
{
    class AssemblyLoader
    {
        private CompileSettings settings;

        public AssemblyLoader(CompileSettings settings)
        {
            this.settings = settings;
        }

        public Context Load()
        {
            var universe = new Universe();

            var asms = settings
                .Assemblies
                .Select((p, i) => Process(universe, p, i))
                .ToList();

            return new Context(universe, asms, settings);
        }

        private CilAssembly Process(Universe universe, AssemblySettings settings, int index)
        {
            var asm = universe.LoadFile(settings.Path);

            var result = new CilAssembly
            {
                Name = asm.FullName,
                EntryPoint = asm.EntryPoint,
                ReflectionAssembly = asm,
                Identifier = "asm" + index,
                Settings = settings
            };

            var types = new List<CilType>();
            result.Types = types;

            foreach (var type in asm.GetTypes())
            {
                types.Add(ProcessType(type));
            }

            return result;
        }

        private CilType ProcessType(IKVM.Reflection.Type type)
        {
            var result = new CilType
            {
                Name = type.Name,
                Namespace = type.Namespace,
                BaseType = type.BaseType != null ? type.BaseType.FullName : null,
                ReflectionType = type
            };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            var flags = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;

            foreach (var method in type.GetMethods(flags))
            {
                if (method.DeclaringType == type)
                    methods.Add(ProcessMethod(result, method));
            }

            foreach (var ctor in type.GetConstructors(flags))
            {
                if (ctor.DeclaringType == type)
                    methods.Add(ProcessMethod(result, ctor));
            }

            return result;
        }

        private CilMethod ProcessMethod(CilType type, MethodBase method)
        {
            return new CilMethod
            {
                Name = method.Name,
                ReflectionMethod = method,
                IsHideBySig = method.IsHideBySig,
                IsVirtual = method.IsVirtual,
                MethodBody = method.GetMethodBody(),
                MetadataToken = method.MetadataToken,
                Resolver = new ModuleILResolver(method),
                DeclaringType = type
            };
        }

    }
}
