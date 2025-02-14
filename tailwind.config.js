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
        'sp-1': '8px',
        'sp-2': '12px',
        'sp-3': '16px',
        'sp-4': '20px',
        'sp-5': '28px',
        'sp-6': '44px',
      },
      maxWidth: {
        main: '1280px',
      },
      padding: {
        common: '3vw',
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
