/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bank-blue': '#1e40af',
                'bank-navy': '#1e293b',
                'bank-gold': '#fbbf24',
                'bank-gray': '#f8fafc',
            },
        },
    },
    plugins: [],
}