const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { resolver: { sourceExts, assetExts } } = getDefaultConfig();
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'), 
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== 'svg'), 
        sourceExts: [...sourceExts, 'svg'], 
      },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
