import { css } from 'styled-components'

export const sizes = {
    wide: 1180,
    tablet: 768,
    landscape: 600,
    mobile: 375
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
    return accumulator
}, {})
