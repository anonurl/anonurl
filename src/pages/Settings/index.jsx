import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Config } from './style';
import { en, pt } from '../../assets/locales';
import { ThemeProvider } from "styled-components";
import { style } from "../../styles/themes";

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const actualLang = langStoraged === 'en' ? en : pt;
    
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    useEffect(() => {
        const langStoraged = localStorage.getItem('lang');

        if (langStoraged) {
            const langSelector = document.querySelector('#langSelector');

            setLang(langStoraged);
            langSelector.value = langStoraged;
        
        } else {
            localStorage.setItem('lang', lang);

        }

    }, [window]);

    const handleLang = () => {
        const langSelector = document.querySelector('#langSelector');

        setLang(langSelector.value);

        localStorage.setItem('lang', langSelector.value);
    }

    return (
        <ThemeProvider theme={ style }>
            <Header />
            <Container>
                <Config>
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
