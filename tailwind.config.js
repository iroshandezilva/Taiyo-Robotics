const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: "15px"
        },
        extend: {
            fontFamily: {
                barn: " 'barndomsfirkante'",
                roboto: "'Roboto', sans-serif",
            },
            colors: {
                'brown-dark': '#232323',
                'blood-red': '#C92A50',
                'dark-blue': '#1F212D',
                'dark-mx-blue': '#18191E',
                'sea-blue': '#0A102E',
                'dark-1': '#17191D',
                'dark-2': '#303030',
                'dark-3': '#212329',
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                amber: colors.amber,
                pink: colors.pink,
                rose: colors.rose,

            },
            backgroundImage: {
                'hero-bg': "url('../img/hero-bg.jpg')",
                'shape': "url('../img/bg-2.png')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
