import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'src/index.js',
	name: 'dateprettify',
	output: {
		format: 'umd',
		file: 'dist/dateprettify.umd.js'
	},
	plugins: [
		buble(),
		uglify()
	],
	external: ['date-fns/format'],
	globals: {
		'date-fns/format': 'format'
	}
};
