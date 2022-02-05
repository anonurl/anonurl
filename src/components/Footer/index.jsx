import { useEffect } from 'react';
import { Container } from './style';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    useEffect(() => {
        const footer = document.getElementsByTagName('footer')[0];
        
        if (window.location.pathname === '/' || screen.width <= 800) {
            footer.style.bottom = (-(document.documentElement.scrollHeight - document.documentElement.clientHeight) -130) + 'px';

            window.onresize = () => {
                footer.style.bottom = 0;
                footer.style.bottom = (-(document.documentElement.scrollHeight - document.documentElement.clientHeight) -130) + 'px';
            }
        
        } else {
            footer.style.bottom = 0;
        
        }

    }, [window]);

    return (
        <Container>
            <nav>
                <ul>
                    <li>&copy; 2021-2022 AnonURL</li>
                    <li><a href="https://github.com/anonurl/" target="_blank">{ lang.footer.source }</a></li>
                    <li><a href="mailto:z3ox1s@protonmail.com" target="_blank">{ lang.footer.contact }</a></li>
                    <li><a href="https://www.flaticon.com/" target="_blank">{ lang.footer.flaticon }</a></li>
                </ul>
            </nav>
        </Container>
    );
}
