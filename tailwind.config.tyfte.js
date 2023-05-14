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
    // set theme defaults
    fontFamily: {
      mono: [
        'Space Mono', 'sans-serif'
      ],
      sans: [
        'Space Grotesk', 'sans-serif'
      ],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      
      light: {
        DEFAULT: '#fff',
        gray: '#E0E0E0',
        soft: '#E0E0E030'
      },
      
      dark: {
        DEFAULT: '#252525',
        gray: '#343434',
        neutral: '#4D4D4D'
      },

      green: {
        DEFAULT: '#0ACF83',
        dark: '#1B9F6C',
      },

      yellow: {
        DEFAULT: '#FFC32A',
        dark: '#DDA600',
      },

      red: {
        DEFAULT: '#E46A62',
        dark: '#C23E3E',
      },

      purple: {
        DEFAULT: '#C175FD',
        dark: '#8E63E2',
      },
    },

    // extending the theme
    extend: {
      spacing: {
        'screen-d': '100dvh',
        'screen-l': '100lvh',
        'screen-s': '100svh',
        '15': '3.75rem',
        '30': '7.5rem',
        'frame': 'var(--frame)',
        'frame-2': 'calc(var(--frame)*2)',
        'frame-3': 'calc(var(--frame)*3)',
        'frame-0.5': 'calc(var(--frame)/2)',
      },
      borderWidth: {
        'frame': 'var(--frame)',
        'frame-0.5': 'calc(var(--frame)/2)',
      },
      boxShadow: {
        'big': '30px 54px 124px 0px #00000040',
      },
      aspectRatio: {
        '16/11': '16 / 11',
      },
      padding: {
        '0.5': '0.125rem',
      },
      zIndex: {
        'behind': '-1',
        '100': '100',
      },
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(.47,1.64,.41,.8)',
      }
    },
  },
}
