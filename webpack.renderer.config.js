const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules: [
      ...rules,
      {
        test: require.resolve('p5'),
        use: [{
          loader: 'expose-loader',
          options: {
            exposes: {
              globalName: 'p5',
            },
          },
        }],
      }
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "p5": require.resolve('p5/lib/p5.js')
    }
  },
  target: 'electron-renderer',
};