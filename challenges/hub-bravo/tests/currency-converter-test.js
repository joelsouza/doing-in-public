const assert = require('assert')
const { supportedCurrencies } = require('../currency-converter')

test('list all supported currencies', () => {
  const actual = supportedCurrencies()
  const expected = ['USD', 'BRL', 'EUR', 'BTC', 'ETH']
  assert.deepStrictEqual(actual, expected)
})
