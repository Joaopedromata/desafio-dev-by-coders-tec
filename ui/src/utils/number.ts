export const formatValue = (value: string | number) => {
  const formatType = typeof value === "number" ? `${value}` : value
  const parseValue = parseFloat(formatType).toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })

  return `R$ ${parseValue}`
}
