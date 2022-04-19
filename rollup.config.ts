import tsPlugin from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const NODE_ENV = process.env.NODE_ENV || 'development'
const outputFile = NODE_ENV === 'production' ? './lib/index.js' : './lib/dev.js'

export default {
  input: './src/index.tsx',
  output: {
    file: outputFile,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    tsPlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ],
  external: (id) => /^react|styled-jsx/.test(id)
}
