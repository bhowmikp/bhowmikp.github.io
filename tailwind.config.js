module.exports = {
    purge: {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
            './serializers/**/*.{js,ts,jsx,tsx}'
        ],
        safelist: ['link-button', 'regular-button']
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                button: 'var(--color-bg-button)'
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                nav: 'var(--color-text-nav)'
            },
            borderColor: {
                button: 'var(--color-bg-button)',
                experienceSection: 'var(--color-bg-experience-section)'
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
