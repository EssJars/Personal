module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'viridian': '#003a2b',
        themeBlue: '#6196E4',
        themeDarkBlue: '#020215',
        viridian2: '#00825a',
      },
      fontFamily: {
        ubuntu: ['Varela Round', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      blur: {
        xs: '7px',
        sm: '6px',
        md: '2px',
      },
      screens: {
        desktop: '68.75rem', //1100px
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}