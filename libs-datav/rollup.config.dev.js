const path = require('path')
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/index.js')

module.exports = {
  input: inputPath,
  output: {
    name: 'datav',
    file: outputPath,
    format: 'umd'
  }, 
  plugins: [
    babel({
      exclude:"node_modules/**"
    }),
    resolve(),
    json(), 
    vuePlugin({
      include: /\.vue$/,
    }),
    commonjs(),
    // terser(),
    postcss()
  ],
  external: ['vue']
}