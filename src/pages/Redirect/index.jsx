import { Container, Redirect } from "./style"
import { get } from 'axios';
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../styles/themes";
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    const [result, setResult] = useState({});
    
    useEffect(async () => {
        await get('https://api-anonurl.herokuapp.com/api/redirect' + window.location.pathname)
        
        .then(r => setResult(r))
        
        .catch(() => {
            window.location.href = '/404';
        
        });
    
    }, [window]);

    const handleGo = () => window.location.href = result.data.url;
    const handleCancel = () => window.location.href = '/';

    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === 'light' ? light : dark }>
            <Container className="container">
                <Redirect className="app">
                    <h2>{ lang.redirect.willbe }</h2>
                    <button onClick={() => handleGo()}>{ lang.redirect.agree }</button>
                    <button onClick={() => handleCancel()}>{ lang.redirect.cancel }</button>
                </Redirect>
            </Container>
        </ThemeProvider>
    )
}
