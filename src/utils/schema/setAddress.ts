import type { Address } from '~/types.js'

export function setAddress(address?: Address) {
  if (address) {
    return {
      '@type': 'PostalAddress',
      ...address,
    }
  }

  return undefined
}
