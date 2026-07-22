import { useEffect, useState } from 'react';
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css'

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const savedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return savedTheme || 'light';
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) { 
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }

    useEffect(() => { 
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => {
            console.log('Cleaning up theme effect');
        }
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Home"
                title="Home"
            >
                <HouseIcon />
            </a>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="History"
                title="History"
            >
                <HistoryIcon />
            </a>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Settings"
                title="Settings"
            >
                <SettingsIcon />
            </a>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Theme"
                title="Theme"
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
