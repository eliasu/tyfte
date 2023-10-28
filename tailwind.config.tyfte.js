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
      inherit: 'inherit',
      
      usercolor: {
        DEFAULT: 'rgba(var(--usercolor), <alpha-value>)',
      },

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
      screens: {
        'xs': '480px',
      },
      height: {
        'screen-1': '100vh',
        'screen-2': '200vh',
        'screen-3': '300vh',
        'screen-4': '400vh',
        'screen-5': '500vh',
        'screen-6': '600vh',
        'screen-7': '700vh',
        'screen-8': '800vh',
        'screen-10': '1000vh',
        'screen-d': '100dvh',
        'screen-l': '100lvh',
        'screen-s': '100svh', 
      },
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
        '112': '28rem',
        '200': '50rem',
        'frame': 'var(--frame)',
        'frame-1.5': 'calc(var(--frame)*1.5)',
        'frame-2': 'calc(var(--frame)*2)',
        'frame-2.5': 'calc(var(--frame)*2.5)',
        'frame-3': 'calc(var(--frame)*3)',
        'frame-4': 'calc(var(--frame)*4)',
        'frame-5': 'calc(var(--frame)*5)',
        'frame-6': 'calc(var(--frame)*6)',
        'frame-1/2': 'calc(var(--frame)/2)',
        'frame-1/3': 'calc(var(--frame)/3)',
        'frame-1/4': 'calc(var(--frame)/4)',
        'frame-1/5': 'calc(var(--frame)/5)',
      },
      borderWidth: {
        'frame': 'var(--frame)',
        'frame-1/2': 'calc(var(--frame)/2)',
        '1': '1px',
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
        '900': '900',
      },
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(.47,1.64,.41,.8)',
        'slider': 'cubic-bezier(0.710, 0.075, 0.340, 0.835)',
      },
      backgroundImage: {
        'grain': "url('/resources/images/grain_bg.jpg')",
        'hero-grad' : "linear-gradient(185deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
      },
      gridTemplateColumns: {
        'min': 'min-content',
        'hero': '1fr auto',
      },
      gridTemplateRows: {
        'hero': 'calc(100dvh - var(--frame) * 2)',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
        'screen-2/3': '66vw',
        'screen-1/4': '25vw',
        'screen-3/4': '75vw',
      },
    },
  },
  // add your own plugins
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('touch', '@media (hover: none) and (pointer: coarse)')
    })
  ]
}