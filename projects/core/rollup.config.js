/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * Core Library Build
 *
 * This is the main rollup build for the Core library.
 * The build compiles and optimizes the library for production.
 */

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import { join } from 'path';
import {
  packageCheck,
  webComponentAnalyer,
  createPackageModuleMetadata,
  createLibraryEntryPoints,
  litSass,
  globalStyles,
  esmCache,
} from './rollup.utils.js';

const config = {
  baseDir: './src',
  outDir: join('dist', 'lib'), // rollup will fail on Windows if we don't normalize path deliminters
  assets: ['./README.md'],
  modules: {
    entryPoints: ['./src/**/index.ts', './src/**/register.ts'],
    sideEffects: ['./src/**/register.ts', './src/polyfills/*.ts'],
  },
  styles: [
    { input: './src/styles/global.scss', output: './dist/lib/global.css' },
    './src/styles/module.layout.scss',
    './src/styles/module.reset.scss',
    './src/styles/module.typography.scss',
    './src/styles/theme.dark.scss',
    './src/styles/theme.low-motion.scss',
    './src/styles/theme.high-contrast.scss',
    './src/list/list.scss',
    './src/table/table.scss',
  ],
  package: {
    exports: [
      { input: './styles/module.tokens.css', output: './styles/module.tokens.min.css' },
      './icon/shapes/*',
      './icon/icon.service.js',
      './tokens/tokens.js',
      './tokens/tokens.d.ts',
      './tokens/tokens.json',
      './tokens/tokens.scss',
      './tokens/tokens.ios.swift',
      './tokens/tokens.android.xml',
    ],
  },
};

const prod = !process.env.ROLLUP_WATCH;

export default [
  ...globalStyles(config),
  {
    external: [/^tslib/, /^ramda/, /^@lit/, /^lit/, /^lit-html/, /^lit-element/, /^@cds\/core/],
    input: 'library-entry-points',
    treeshake: false,
    preserveEntrySignatures: 'strict',
    output: {
      preserveModules: true,
      dir: config.outDir,
      format: 'esm',
      sourcemap: prod,
      // https://github.com/vmware/clarity/issues/6695
      sourcemapExcludeSources: false,
      minifyInternalExports: prod,
    },
    plugins: [
      createLibraryEntryPoints(config.modules.entryPoints),
      styles({ mode: 'emit' }),
      litSass(),
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.lib.json' }),
      copy({
        copyOnce: true,
        targets: [
          {
            src: './package.lib.json',
            rename: 'package.json',
            dest: config.outDir,
            transform: p => createPackageModuleMetadata(p, config),
          },
          ...config.assets.map(src => ({ src, dest: config.outDir })),
        ],
      }),
      !prod ? esmCache(config.outDir) : [],
      prod ? minifyHTML() : [],
      prod
        ? terser({ ecma: 2020, module: true, format: { comments: false }, compress: { passes: 2, unsafe: true } })
        : [],
      prod
        ? replace({
            preventAssignment: false,
            values: {
              'super(...arguments),': 'super(...arguments);',
              'super(),': 'super();',
            }, // safari 15.1 bug with minification optimization
          })
        : [],
      prod ? webComponentAnalyer(config.outDir) : [],
      prod ? packageCheck(config.outDir) : [],
      del({
        targets: ['./dist/lib/**/assets', './dist/lib/**/.tsbuildinfo', './dist/lib/**/_virtual'],
        hook: 'writeBundle',
      }),
    ],
  },
];
