var path = require('path');
var fs = require('fs');
var context = path.join(__dirname, 'components');
var context_test_app = path.join(__dirname, 'test_app', 'static', 'test_app');

var moduleOpts = {
  // Inform webpack to use the babel loader when reading files
  // ending in '.jsx'
  loaders: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ],
};

module.exports = [
  {
    target: 'node',
    externals: {
      "react": "react"
    },
    context: context,
    entry: {
      'ErrorThrowingComponent': ['./ErrorThrowingComponent.jsx'],
      'HelloWorld': ['./HelloWorld.jsx'],
      'HelloHook': ['./HelloHook.jsx'],
      'HelloWorldWrapper': ['./HelloWorldWrapper.jsx'],
      'PerfTestComponent': ['./PerfTestComponent.jsx'],
      'SyntaxErrorComponent': ['./SyntaxErrorComponent.jsx'],
      'ES6Test': ['./ES6Test.jsx'],
    },
    output: {
      path: context,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    module: moduleOpts
  },
  {
    context: context_test_app,
    entry: {
      'StaticFileFinderComponent': ['./StaticFileFinderComponent.jsx']
    },
    output: {
      path: context_test_app,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    module: moduleOpts
  },
];
