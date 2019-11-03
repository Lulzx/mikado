import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
	babel({
    exclude: 'node_modules/**',
    presets: ['solid']
  }),
	resolve({ extensions: ['.js', '.jsx'] })
];

if (process.env.production) {
	plugins.push(terser());
}

export default [{
	input: 'src/main.jsx',
	output: {
		file: 'dist/main.js',
		format: 'iife'
	},
	plugins
}, {
	input: 'src/main-keyed.jsx',
	output: {
		file: 'dist/main-keyed.js',
		format: 'iife'
	},
	plugins
}, {
	input: 'src/main-non-keyed.jsx',
	output: {
		file: 'dist/main-non-keyed.js',
		format: 'iife'
	},
	plugins
}];