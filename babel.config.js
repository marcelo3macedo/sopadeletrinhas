module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@helpers': './src/helpers',
          '@layouts': './src/layouts',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@services': './src/services',
          '@screens': './src/screens',
          '@store': './src/store',
          '@styles': './src/styles',
          '@themes': './src/themes',
          '@translations': './src/translations',
        },
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
