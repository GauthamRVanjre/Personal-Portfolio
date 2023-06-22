const withTM = require('next-transpile-modules')(['package1', 'package2']);
const withWebpack5 = require('@next/webpack5');

module.exports = withWebpack5(withTM());
