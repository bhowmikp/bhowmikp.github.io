module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './serializers/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)'
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                nav: 'var(--color-text-nav)'
            }
        }
    },
    variants: {
        extend: {
            textColor: ['visited']
        }
    },
    plugins: []
};
