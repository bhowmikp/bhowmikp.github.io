import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { event } from '@Service/googleService';

const ThemeChanger: FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button
                aria-label="change theme"
                type="button"
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                    event({
                        name: 'menuEvent',
                        category: 'button',
                        label: theme === 'light' ? 'Change to dark mode' : 'Change to light mode',
                        value: ''
                    });
                }}
                className="regular-button"
            >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default ThemeChanger;
