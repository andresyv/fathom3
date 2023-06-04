export const userPriceFormatter = () => {
  const priceToEUR = (price?: number) => {
    return price ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price) : 'Free'
  }

  return {
    priceToEUR
  }
}
