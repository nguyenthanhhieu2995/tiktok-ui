/** @type {import('tailwindcss').Config} */

const { title } = require('process');
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['TikTokFont-Regular', 'sans-serif', ],
            bold: ['TikTokFont-Bold', 'sans-serif'],
            semibold: ['TikTokFont-Semibold', 'sans-serif'],
            displaybold: ['TikTokDisplay-Bold', 'sans-serif'],
            displaysemibold: ['TikTokDisplay-Semibold', 'sans-serif'],
        },
    },
    variants: {
        fill: ['hover', 'focus'],
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('children', '&>*');
        }),
    ],
};
