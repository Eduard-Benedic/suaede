module.exports = {
     // important: true,
     theme: {
          fontFamily: {
               display: ['Raleway', 'sans-serif'],
               body: ['Roboto', 'sans-serif'],
          },
          extend: {
               colors: {
                    cyan: '#9cdbff',
                    main: '#214368',
                    triad: '#237BD9',
                    fifth: '#D99623',
                    'fifth-opacity': '#d996234f',
                    'main-lighter': '#1b5493',
                    'custom-grey': '#9c9c9c',
                    'custom-white': '#ececec'
               },
               inset: {
                    '1/2': '50%'
               }
          }
     },
     variants: {
          opacity: ['responsive', 'hover', 'active']
     }
}