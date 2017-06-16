import uglify from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';

export default {
	entry: 'index.js',
	moduleName: 'dateprettify',
	format: 'umd',
	plugins: [
		buble(),
		uglify()
	],
	dest: 'dist/dateprettify.umd.js',
	external: [ 'moment' ],
	globals: {
		moment: 'moment'
	}
};
