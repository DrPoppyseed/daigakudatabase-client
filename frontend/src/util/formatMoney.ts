const formatMoney = (num: number) => new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'USD',
  }).format(num)

export default formatMoney
