const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const YAML = require('yamljs');

const swaggerDoc = YAML.load('./utils/SwaggerUtils.yml');

module.exports = { swaggerDoc, swaggerui };