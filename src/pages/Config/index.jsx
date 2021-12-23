import {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { dark, light } from "../../styles/themes";
import { Container, Config } from './style';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const actualLang = langStoraged === 'en' ? en : pt;
    
    const [theme, setTheme] = useState('light');
    const [lang, setLang] = useState('en');
    
    document.body.style.backgroundColor = theme === 'light' ? light.bodyPrimary : dark.bodyPrimary;

    useEffect(() => {
        const themeStoraged = localStorage.getItem('theme');
        const langStoraged = localStorage.getItem('lang');

        if (themeStoraged) {
            const themeSelector = document.querySelector('#themeSelector');
            
            setTheme(themeStoraged);
            themeSelector.value = themeStoraged;

        } else {
            localStorage.setItem('theme', theme);
        
        }

        if (langStoraged) {
            const langSelector = document.querySelector('#langSelector');

            setLang(langStoraged);
            langSelector.value = langStoraged;
        
        } else {
            localStorage.setItem('lang', lang);

        }

    }, [window]);

    const handleTheme = () => {
        const themeSelector = document.querySelector('#themeSelector');

        setTheme(themeSelector.value);

        localStorage.setItem('theme', themeSelector.value);
    }
    
    const handleLang = () => {
        const langSelector = document.querySelector('#langSelector');

        setLang(langSelector.value);

        localStorage.setItem('lang', langSelector.value);
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <Header />
            <Container>
                <Config>
                    <h2>{ actualLang.config.theme }</h2>
                    <select id="themeSelector" onChange={() => handleTheme()}>
                        <option value="light">{ actualLang.config.light }</option>
                        <option value="dark">{ actualLang.config.dark }</option>
                    </select>

                    <h2>{ actualLang.config.language }</h2>
                    <select id="langSelector" onChange={() => handleLang()}>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                    </select>
                </Config>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
