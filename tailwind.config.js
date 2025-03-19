/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'my-dark': '#3E3A39',
        'my-yellow': '#F4D822',
        'my-paleyellow': '#FFF3CC',
        'my-green': '#1EAA39',
        'my-palegreen': '#E8F6EB',
        'my-red': '#E95513',
        'my-palered': '#FCE2D8',
        'my-palegray': '#EBEBEB',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
      fontSize: {
        'pc-h1': ['2.5rem', { lineHeight: '1.5' }], // 40px
        'pc-h2': ['1.75rem', { lineHeight: '1.5' }], // 32px
        'pc-h3': ['1.5rem', { lineHeight: '1.5' }], // 28px
        'pc-h4': ['1.25rem', { lineHeight: '1.5' }], // 24px
        'pc-p': ['1rem', { lineHeight: '2' }], // 基本のp
        'pc-p2': ['1rem', { lineHeight: '1.5' }], // フッターやフロー等の説明のp
        'sp-h1': ['2rem', { lineHeight: '1.5' }], // 40px
        'sp-h2': ['1.5rem', { lineHeight: '1.5' }], // 32px
        'sp-h3': ['1.25rem', { lineHeight: '1.5' }], // 28px
        'sp-h4': ['1rem', { lineHeight: '1.5' }], // 24px
        'sp-p': ['0.875rem', { lineHeight: '2' }], // 基本のp
        'sp-p2': ['0.875rem', { lineHeight: '1.5' }], // フッターやフロー等の説明のp
      },
      borderRadius: {
        pc: '32px',
        sp: '20px',
      },
      // paddingとmarginの設定
      spacing: {
        'pc-1': '8px',
        'pc-2': '12px',
        'pc-3': '16px',
        'pc-4': '28px',
        'pc-5': '40px',
        'pc-6': '84px',
        'pc-7': '212px',
        'pc-flag': '28px',
        'sp-1': '8px',
        'sp-2': '12px',
        'sp-3': '16px',
        'sp-4': '20px',
        'sp-5': '28px',
        'sp-6': '44px',
        'sp-flag': '21px',
      },
      maxWidth: {
        main: '1280px',
      },
      padding: {
        common: '3vw',
      },
      keyframes: {
        myspin: {
          '0%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'cubic-bezier(0.4, 0.8, 0.2, -0.5)',
          },
          '4%': {
            transform: 'rotate(8deg)',
            'animation-timing-function': 'ease-in-out',
          },
          '12%': {
            transform: 'rotate(-8deg)',
            'animation-timing-function': 'cubic-bezier(0.8, 1.5, 0.6, 0.2)',
          },
          '16%,100%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'linear',
          },
        },
        myping: {
          '0%,15%,100%': {
            transform: 'none',
            'transform-origin': 'bottom center',
          },
          '3%': {
            transform: 'scale(0.9, 1.1)',
          },
          '9%': {
            transform: 'scale(1.05, 0.95)',
          },
          '13%': {
            transform: 'scale(0.95, 1.05)',
          },
        },
        mybounce: {
          '0%,100%': {
            transform: 'none',
            'animation-timing-function': 'ease-out',
          },
          '3%': {
            transform: 'translate(-6%, -5%) rotate(-2.5deg)',
            'animation-timing-function': 'ease-in',
          },
          '6%': {
            transform: 'translate(-12%, 0%) rotate(-5deg)',
            'animation-timing-function': 'ease-out',
          },
          '9%': {
            transform: 'translate(-6%, -5%) rotate(-2.5deg)',
            'animation-timing-function': 'ease-in',
          },
          '12%': {
            transform: 'translate(0%, 0%)',
            'animation-timing-function': 'ease-out',
          },
          '15%': {
            transform: 'translate(6%, -5%) rotate(2.5deg)',
            'animation-timing-function': 'ease-in',
          },
          '18%': {
            transform: 'translate(12%, 0%) rotate(5deg)',
            'animation-timing-function': 'ease-out',
          },
          '21%': {
            transform: 'translate(6%, -5%) rotate(2.5deg)',
            'animation-timing-function': 'ease-in',
          },
          '24%': {
            transform: 'translate(0%, 0%)',
            'animation-timing-function': 'linear',
          },
        },
      },
      animation: {
        myspina: 'myspin 2s infinite',
        myspinb: 'myspin 2.2s infinite',
        myspinc: 'myspin 2.4s infinite',
        myping: 'myping 6s ease-in-out infinite',
        mybounce: 'mybounce 4s infinite',
      },
    },
    backgroundImage: {
      heroillust1: "url('/img/hcf_heroillust_1.png')",
      heroillust2: "url('/img/hcf_heroillust_2.png')",
      heroillust3: "url('/img/hcf_heroillust_3.png')",
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '60%': '60%',
      16: '4rem',
    },
  },
  variants: {},
  plugins: [],
}
