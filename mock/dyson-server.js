const dyson = require('dyson');
const path = require('path');

const options = {
  configDir: path.join(__dirname),
  port: 4000,
  bodyParserUrlencodedLimit: '100000kb',
  delay: 200,
};

const configs = dyson.getConfigurations(options);
const appBefore = dyson.createServer(options);
dyson.registerServices(appBefore, options, configs);
console.log(`Dyson listening at port ${options.port}`);
