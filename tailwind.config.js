/** @type {import('tailwindcss').Config} */

const { title } = require('process');
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['TikTokText-Bold', 'sans-serif', ],
            bold: ['TikTokDisplay-Bold', 'sans-serif'],
            display: ['TikTokText-Medium', 'sans-serif'],
            light: ['TikTokText-Regular', 'sans-serif'],
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
