import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        'calc-cube': 'spin 10s infinite',
      },
      colors: {
        primary: "#11151c",
        secondary: "#83cbe3",
        tertiary: "#344966",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dprimary: 'white',
        csecondary: '#6380e4'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        folionav: "880px"
      },
      backgroundImage: {
        "hero-img": "url('/src/Portfolio/assets/herobg4.png')"
      },
      fontSize: {
        clamp: 'clamp(24px, 24vw, 200px)'
      }
    },
  },
  plugins: [],
}
export default config
