module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
					blocklist: null,
					allowlist: null,
					blacklist: null, // DEPRECATED
					whitelist: null, // DEPRECATED
					safe: false,
					allowUndefined: true,
					verbose: false
				}
			],
			'inline-dotenv',
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
					root: ['./src'],
					alias: {
						'@components': './src/components',
						'@assets': './assets',
						'@styles': './src/styles',
						'@screens': './src/screens',
						'@routes': './src/routes',
						'@layouts': './src/layouts',
						'@images': './src/images',
						'@hooks': './src/hooks',
						'@src': './src'
					}
				}
			]
		]
  };
};
