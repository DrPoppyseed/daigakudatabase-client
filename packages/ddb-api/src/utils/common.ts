export const isStringNumeric = (str: string): boolean => {
  // @ts-ignore
  // We need to use type-coercion here, much to our dismay
  return !Number.isNaN(str) && !Number.isNaN(parseFloat(str))
}

export const toNumberIfNumeric = (raw: number | string): number | null => {
  if (typeof raw === 'number') return raw
  if (isStringNumeric(raw)) return parseInt(raw, 10)
  return null
}
