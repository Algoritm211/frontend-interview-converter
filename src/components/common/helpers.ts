

export const sortFavorites = (allCurrencies: Array<string>, favoritesCurrencies: Array<string>) => {
  const nonFavorites = allCurrencies.filter(currency => !favoritesCurrencies.includes(currency))

  return [...favoritesCurrencies, ...nonFavorites]
}