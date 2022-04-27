export const formatDocumentNumber = (value: string | number) => {
  const formatType = typeof value === "number" ? `${value}` : value
  return formatType?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
