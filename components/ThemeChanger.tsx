import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { event } from '@Service/googleService';

const ThemeChanger: FC = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div>
            <button
                aria-label="change theme"
                type="button"
                onClick={() => {
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                    event({
                        name: 'menuEvent',
                        category: 'button',
                        label: resolvedTheme === 'light' ? 'Change to dark mode' : 'Change to light mode',
                        value: ''
                    });
                }}
                className="regular-button"
            >
                {resolvedTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default ThemeChanger;
