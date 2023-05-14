//--------------------------------------------------------------------------
// Tailwind Typography configuration
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
// Tailwind custom Tyfte configuration
//--------------------------------------------------------------------------
//
// Here we define base styles, components and utilities used by Tyfte.
//

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontSize: {
        'lead-1': ['clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.5208)), 1.875rem)', {
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        }],

        'lead-2': ['clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.1736)), 1.25rem)', {
          lineHeight: '105%',
        }],

        'crowd': ['0.625rem', {
          lineHeight: '100%',
          letterSpacing: '0.2em',
          fontWeight: '700',
        }],

        'tag': ['0.75rem', {
          lineHeight: '100%',
          letterSpacing: '0.095em',
          fontWeight: '700',
        }],

        'button': ['clamp(20px, calc(1.25rem + ((1vw - 3.75px) * 0.1294)), 22px);', {
          lineHeight: '90%',
          letterSpacing: '0.2em',
          fontWeight: '700',
        }],

        'buttonbig': ['clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 1.0417)), 2.25rem);', {
          lineHeight: '90%',
          letterSpacing: '0.2em',
          fontWeight: '700',
        }],

        'navlink': ['clamp(4.375rem, calc(4.375rem + ((1vw - 0.234375rem) * 7.7348)), 8.75rem);', {
          lineHeight: '105%',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
      },
    },
  },
  
  plugins: [
    plugin(function({ addBase, theme}) {
      const typo = {
        
        p: {
          fontSize: '1rem',
          marginTop: '0rem',
          marginBottom: '0.6rem',
          lineHeight: '135%',
        },
        
        '.prose p': {
          marginBottom: 'theme(spacing.8)',
        },
        
        '.text-lead-1': {
          maxWidth: '35ch',
        },

        a: {
          color: 'theme(colors.yellow.DEFAULT)',
        },
        
        'a:hover': {
          color: 'theme(colors.green.DEFAULT)',
        },

        h1: {
          fontSize: 'clamp(2.5rem, calc(2.5rem + ((1vw - 0.48rem) * 2.6042)), 4.375rem)',
          letterSpacing: 'clamp(0.15em, calc(0.15rem + ((1vw - 0.234375em) * 0.2036)), 0.2em)',
          lineHeight: '105%',
          fontWeight: '700',
        },

        '.prose h1': {
          marginBottom: 'theme(spacing.8)',
        },
        
        h2: {
          fontSize: 'clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.5208)), 1.875rem)',
          letterSpacing: '0.015em',
          lineHeight: '95%',
          fontWeight: '700',
        },
        
        h3: {
          fontSize: 'clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.1736)), 1.25rem)',
          letterSpacing: '0.095em',
          lineHeight: '130%',
          fontWeight: '700',
          fontFamily: theme('fontFamily.mono'),
          color: theme("colors.yellow.DEFAULT"),
        },

        // '@screen lg': {
          
        // },
      }
      
      const defaults = {
        ':root': {
          minHeight: '0vw',
          fontSize: '100%',
          'font-size': '1rem',
          lineHeight: '105%',
        },

        'html': {
            color: theme('colors.light.DEFAULT'),
            fontFamily: theme('fontFamily.sans'),
        },
        
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
      }

      addBase(defaults)
      addBase(typo)
    }),

    plugin(function({ addComponents, theme }) {
      const components = {
        // '.classname': {
        //   width: '100%',
        //   maxWidth: theme('screens.xl'),
        // },
      }
      addComponents(components)
    }),

    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
        // '.cssclass': {
        //   fill: 'currentColor',
        // },
      }
      addUtilities(newUtilities)
    }),
  ]
}
