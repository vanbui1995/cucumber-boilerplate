const { config } = require('./wdio.conf');

config.baseUrl = 'https://localhost:3000/';

config.capabilities = [
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        // '--disable-infobars',
        '--window-size=1280,720',
        '--headless',
        '--allow-insecure-localhost',
        '--auto-open-devtools-for-tabs',
      ],
    },
    maxInstances: 1,
  },
];

config.headless = true;

config.specs = ['./src/features/local/**/*.feature'];

config.suites = {
  investment: ['./src/features/local/investment/*.feature'],
};

config.cucumberOpts.require = [
  './src/steps/local/given.local.js',
  './src/steps/local/when.local.js',
  // './src/steps/local/then.local.js',
];

config.services = ['intercept'];

exports.config = config;
