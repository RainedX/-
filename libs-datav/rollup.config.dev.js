const path = require('path')
const nodeResolve = require('rollup-plugin-node-resolve')
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
    nodeResolve()
  ]
}