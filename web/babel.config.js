const presets = ['react-app'];

const plugins = ['babel-plugin-styled-components'];
if (process.env.ENV === 'development') {
	plugins.push('babel-plugin-styled-components');
}

module.exports = {
	presets,
	plugins,
};
