/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: 'var(--color-azure)',
              maxWidth: '100%',
              h1: {
                marginTop: 'var(--mt-4)',
                marginBottom: 'var(--mt-1)',
                color: 'var(--color-azure)'
              },
              h2: {
                marginTop: 'var(--mt-4)',
                marginBottom: 'var(--mt-1)',
                color: 'var(--color-azure)'
              },
              h3: {
                marginTop: 'var(--mt-4)',
                marginBottom: 'var(--mt-1)',
                color: 'var(--color-azure)'
              },
              h4: {
                marginTop: 'var(--mt-4)',
                marginBottom: 'var(--mt-1)',
                color: 'var(--color-azure)',
                fontStyle: 'var(--italic)',
              },
              a : {
                color: 'var(--color-vix-600)',
              },
            },
          },
        },
      },
    },
  }