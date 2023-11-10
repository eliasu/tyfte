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
        'input': ['1.2rem', {
          letterSpacing: '0.02em',
          lineHeight: '105%',
          fontWeight: '500',
        }],

        'swiper-big': ['calc(5.5rem + ((1vw - 0.48rem) * 9.7222))', {
          letterSpacing: '0.02em',
          lineHeight: '105%',
          fontWeight: '700',
        }],

        'head-0': ['clamp(2.5rem, 1.6rem + 4.5vw, 7rem)', {
          letterSpacing: '0.02em',
          lineHeight: '105%',
          fontWeight: '700',
        }],

        'head-1': ['clamp(2.5rem, calc(2.5rem + ((1vw - 0.48rem) * 2.6042)), 4.375rem)', {
          letterSpacing: '0.02em',
          lineHeight: '105%',
          fontWeight: '700',
        }],

        'head-accordion': ['clamp(1.6rem, calc(1.875rem + ((1vw - 0.3rem) * 1.6667)), 2rem)', {
          lineHeight: '105%',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        
        'subhead-accordion': ['clamp(1.25rem, calc(1.25rem + ((1vw - 0.3rem) * 0.8333)), 1.875rem)', {
          lineHeight: '110%',
          letterSpacing: '0em',
          fontWeight: '500',
        }],

        'lead-0': ['clamp(1.75rem, 1.6rem + 0.75vw, 2.5rem)', {
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        }],
        
        'lead-1': ['clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.5208)), 1.875rem)', {
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        }],

        'lead-2': ['clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.1736)), 1.25rem)', {
          lineHeight: '105%',
        }],

        'small-2': ['0.75rem', {
          lineHeight: '100%',
          letterSpacing: '0em',
        }],

        'small-1': ['0.625rem', {
          lineHeight: '100%',
          letterSpacing: '0.2em',
          fontWeight: '700',
        }],

        'modal': ['clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem);', {
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        }],

        'tag': ['0.75rem', {
          lineHeight: '100%',
          letterSpacing: '0.095em',
          fontWeight: '700',
        }],
        
        'button': ['clamp(1.25rem, 1.1739130434782608rem + 0.2717391304347826vw, 1.5rem);', {
          lineHeight: '90%',
          letterSpacing: '0.1em',
          fontWeight: '700',
        }],

        'buttonbig': ['clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 1.0417)), 2.25rem);', {
          lineHeight: '90%',
          letterSpacing: '0.2em',
          fontWeight: '700',
        }],

        'navlink': ['clamp(4.375rem, calc(4.375rem + ((1vw - 0.234375rem) * 4.5307)), 8.75rem);', {
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
          marginBottom: 'theme(spacing.2)',
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
          letterSpacing: '0.02em',
          lineHeight: '105%',
          fontWeight: '700',
        },

        '.prose h1': {
          marginBottom: 'theme(spacing.16)',
        },
        
        h2: {
          fontSize: 'clamp(1.75rem, 1.6rem + 0.75vw, 2.5rem)',
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        },

        '.prose h2': {
          marginBottom: 'theme(spacing.8)',
          marginTop: 'theme(spacing.8)',
        },
        
        h3: {
          fontSize: 'clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.5208)), 1.875rem)',
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        },

        '.prose h3': {
          marginBottom: 'theme(spacing.8)',
          marginTop: 'theme(spacing.8)',
        },

        h4: {
          fontSize: 'clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.1736)), 1.25rem)',
          lineHeight: '150%',
          letterSpacing: '0.015em',
          fontWeight: '500',
        },

        '.prose h4': {
          marginBottom: 'theme(spacing.4)',
          marginTop: 'theme(spacing.4)',
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
