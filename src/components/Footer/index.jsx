import { useEffect } from 'react';
import { Container } from './style';

export default () => {
    useEffect(() => {
        const footer = document.querySelector('.footer');
        
        if (window.location.pathname === '/') {
            footer.style.bottom = (-(document.documentElement.scrollHeight - document.documentElement.clientHeight) -150) + 'px';

            window.onresize = () => {
                footer.style.bottom = 0;
                footer.style.bottom = (-(document.documentElement.scrollHeight - document.documentElement.clientHeight) -150) + 'px';
            }
        
        } else {
            footer.style.bottom = 0;
        
        }

    }, [window])

    return (
        <Container className="footer">
            <nav>
                <ul>
                    <li>&copy; 2021 AnonURL</li>
                    <li><a href="https://github.com/anonurl/anonurl" target="_blank">Source</a></li>
                    <li><a href="mailto:z3ox1s@protonmail.com" target="_blank">Contact</a></li>
                    <li><a href="https://www.flaticon.com/" target="_blank">Flaticon</a></li>
                </ul>
            </nav>
        </Container>
    );
}
