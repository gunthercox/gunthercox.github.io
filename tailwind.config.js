/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./privacy/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        lab: {
          50: '#f3f8f9',
          100: '#e8f1f4',
          200: '#c3d7df',
          300: '#9ebdcb',
          400: '#658da3',
          500: '#3d677e',
          600: '#2f5267',
          700: '#223c4c',
          800: '#162733',
          900: '#0b151f'
        },
        signal: '#11b5c8'
      },
      boxShadow: {
        panel: '0 8px 32px -16px rgba(22, 39, 51, 0.45)'
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(220%)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        scanline: 'scanline 5s linear infinite',
        reveal: 'reveal 600ms ease-out both'
      }
    }
  },
  plugins: []
};
