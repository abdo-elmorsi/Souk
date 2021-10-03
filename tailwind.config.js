const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                main: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#ef233c',
                secondary: '#2b2d42',
                yellowGB: '#f7e733',
                grayDB: '#f3f3f7',
                violetDB: '#8862E0',
                greenDB: '#1DD795',
                yellowDB: '#FFAF01',
                blueDB: '#2196F3',
                violetBlack: '#080A2B',
                violetBlackH: '#020315',
                violetBlackHCh: '#24204f',
                silver: '#C4C4C4',
                backgroundDB: '#EAEFF8',
                blackDB: '#313131',
                FooterDB: '#434242',
                HoverBtn: '#7861E6',
            },
        },
    },
    variants: {
        extend: {
            padding: ['hover'],
        },
    },
    plugins: [],
}
