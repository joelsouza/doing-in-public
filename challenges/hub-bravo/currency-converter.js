const storage = require('./currencies.json')

const supportedCurrencies = () => {
  const currencies = storage.currencies
  if (currencies) {
    return currencies
  }
  return []
}


module.exports = {
  supportedCurrencies
}
