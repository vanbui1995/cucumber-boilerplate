const { config } = require('./wdio.conf');

config.baseUrl = 'https://planpod-spa.azurewebsites.net/';

config.capabilities = [
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        // '--disable-infobars',
        '--window-size=1280,720',
        // '--headless',
        // '--no-sandbox',
        // '--disable-gpu',
        // '--disable-setuid-sandbox',
        // '--disable-dev-shm-usage',
      ],
    },
    maxInstances: 1,
  },
];

config.headless = true;

config.specs = ['./src/features/staging/**/*.feature'];

config.suites = {
  login: ['./src/features/staging/auth/*.feature'],
  user: ['./src/features/staging/user/delete.feature'],
};

config.cucumberOpts.require = [
  './src/steps/staging/given.staging.js',
  './src/steps/staging/then.staging.js',
  './src/steps/staging/when.staging.js',
];

exports.config = config;
