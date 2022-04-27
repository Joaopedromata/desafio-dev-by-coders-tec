export const formatDate = (date: string | number) => {
  const formatType = typeof date === "number" ? `${date}` : date
  return formatType?.split("-").reverse().join("/")
}
