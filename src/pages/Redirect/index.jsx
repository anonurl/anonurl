import { Container, Redirect } from "./style"
import { get } from 'axios';
import { useEffect, useState } from "react";
import { en, pt } from '../../assets/locales';
import { ThemeProvider } from "styled-components";
import { style } from '../../styles/themes';
import Header from '../../components/Header';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    const [result, setResult] = useState({});
    
    useEffect(async () => {
        await get('https://api-anonurl.herokuapp.com/api/redirect' + window.location.pathname)
        .then(({ data: r }) => setResult(r))
    
    }, [window]);

    const handleGo = () => window.location.href = result.url;
    const handleCancel = () => window.location.href = '/';

    return (
        <ThemeProvider theme={ style }>
            <Header />
            <Container className="container">
                <Redirect className="app">
                    <h2>{ lang.redirect.willbe } { result.url }</h2>
                    <button onClick={() => handleGo()}>{ lang.redirect.agree }</button>
                    <button onClick={() => handleCancel()}>{ lang.redirect.cancel }</button>
                </Redirect>
            </Container>
        </ThemeProvider>
    )
}
