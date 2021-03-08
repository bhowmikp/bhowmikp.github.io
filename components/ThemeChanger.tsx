import { useTheme } from 'next-themes';
import React, { FC } from 'react';

const ThemeChanger: FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="regular-button"
            >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default ThemeChanger;
