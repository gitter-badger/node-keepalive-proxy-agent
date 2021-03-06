/* eslint-env node, mocha, should */
require('should')
let testServer = require('../testserver')
const pem = require('pem')

describe('testServer ', function () {
  it('start() throws on pem error', function () {
    let old = pem.createCertificate
    // MOCK MOCK MOCK
    pem.createCertificate = function (a, cb2) { cb2(new Error('HACK')) }
    // noinspection JSValidateTypes
    return testServer.start().should.be.rejected().then(() => { pem.createCertificate = old })
  })
})
