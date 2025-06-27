// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configuração do servidor
config.server = {
  port: 8082,
  enhanceMiddleware: (middleware) => middleware,
};

// Configuração do resolver
config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'db',
  'sqlite'
];

module.exports = config;