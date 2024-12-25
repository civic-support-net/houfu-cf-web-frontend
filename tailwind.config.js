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
      borderRadius: {
        pc: '32px',
        sp: '20px',
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
