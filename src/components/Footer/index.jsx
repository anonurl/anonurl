import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { style } from '../../styles/themes';
import { Footer } from './style';
import { en, pt } from '../../assets/locales';

export default () => {
    useEffect(() => {
        const footer = document.getElementsByTagName('footer')[0];
        const langStoraged = localStorage.getItem('lang');
        
        window.location.pathname != '/'
        ? footer.style.top = '98vh'
        : null;
        
        if (!langStoraged) {
            localStorage.setItem('lang', 'en');
            window.location.reload();
        }

    }, [window.onload])

    const lang = localStorage.getItem('lang') === 'en' ? en : pt;
    
    return (
        <ThemeProvider theme={ style }>
            <Footer id="footer">
                <section>
                    <ul>
                        <h2>{ lang.footer.useful }</h2>
                        <li><a href="https://github.com/anonurl">{ lang.footer.source }</a></li>
                        <li><a href="mailto:z3ox1s@protonmail.com">{ lang.footer.contact }</a></li>
                        <li><a href="https://flaticon.com">{ lang.footer.images }</a></li>
                        <li><a href="https://fonts.google.com/icons">{ lang.footer.icons }</a></li>
                    </ul>
                    <ul>
                        <h2>{ lang.footer.navigate }</h2>
                        <li><Link to="/">{ lang.footer.home }</Link></li>
                        <li><Link to="/track">{ lang.footer.track }</Link></li>
                        <li><Link to="/report">{ lang.footer.report }</Link></li>
                        <li><Link to="/settings">{ lang.footer.settings }</Link></li>
                    </ul>
                </section>
                <p>&copy; 2022 AnonURL | { lang.footer.message } <a href="https://github.com/z3oxs">z3oxs</a></p>
            </Footer>
        </ThemeProvider>
    );
};
