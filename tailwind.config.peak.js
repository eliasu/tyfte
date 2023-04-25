//--------------------------------------------------------------------------
// Tailwind custom Peak configuration
//--------------------------------------------------------------------------
//
// Here we define base styles, components and utilities used by Peak.
//

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    // Use Tailwinds forms plugin for form styling: https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        // Used to hide alpine elements before being rendered.
        '[x-cloak]': {
          display: 'none !important'
        },

        // Display screen breakpoints in debug environment.
        '.breakpoint:before': {
          display: 'block',
          color: theme('colors.yellow'),
          textTransform: 'uppercase',
          content: '"-"',
        },
      })
    }),

    // Render screen names in the breakpoint display.
    plugin(function({ addBase, theme}) {
      const breakpoints = Object.entries(theme('screens'))
        .filter(value => typeof value[1] == 'string')
        .sort((a, b) => {
          return a[1].replace(/\D/g, '') - b[1].replace(/\D/g, '')
        })
        .map((value) => {
          return {
            [`@media (min-width: ${value[1]})`]: {
              '.breakpoint::before': {
                content: `"${value[0]}"`,
              }
            }
          }
        }
      )
      addBase(breakpoints)
    }),
  ]
}
