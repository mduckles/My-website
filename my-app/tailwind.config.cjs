/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'graylight': '#d3dce6',
      'lightcyan': '#dbf9f4ff',
      'azure': '#e6fdffff',
      'gainsboro': '#d9d7ddff',
      'blueyonder': '#607196ff',
      'hookersgreen': '#5f7367ff',
      'pinetree': '#2e382eff',
      'spacecadet': '#2b2d42ff',
      richblack: {
          100: "#cdd0d2",
          200: "#9ba1a5",
          300: "#687379",
          400: "#36444c",
          500: "#04151f",
          600: "#031119",
          700: "#020d13",
          800: "#02080c",
          900: "#010406"
},
          },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: []
};