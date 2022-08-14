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
      blue2: {
          100: "#dfe3ea",
          200: "#bfc6d5",
          300: "#a0aac0",
          400: "#808dab",
          500: "#607196",
          600: "#4d5a78",
          700: "#3a445a",
          800: "#262d3c",
          900: "#13171e"
},
      darkgreen: {
          100: "#dfe3e1",
          200: "#bfc7c2",
          300: "#9faba4",
          400: "#7f8f85",
          500: "#5f7367",
          600: "#4c5c52",
          700: "#39453e",
          800: "#262e29",
          900: "#131715"
},
      treeblack: {
          100: "#d5d7d5",
          200: "#abafab",
          300: "#828882",
          400: "#586058",
          500: "#2e382e",
          600: "#252d25",
          700: "#1c221c",
          800: "#121612",
          900: "#090b09"
},
      space: {
          100: "#d5d5d9",
          200: "#aaabb3",
          300: "#80818e",
          400: "#555768",
          500: "#2b2d42",
          600: "#222435",
          700: "#1a1b28",
          800: "#11121a",
          900: "#09090d"
},

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