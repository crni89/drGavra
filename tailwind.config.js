/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: true,
    theme: {
        extend: {
            colors: {
                'nav-icon': 'rgb(243, 114, 70)',
                'hover-nav': 'rgb(229, 82, 28)'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}

