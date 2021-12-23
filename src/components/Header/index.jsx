import { Link } from 'react-router-dom';
import { Container } from './style';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    return (
        <Container>
            <nav>
                <ul>
                    <li><Link to="/">{ lang.header.home }</Link></li>
                    <li><Link to="/track">{ lang.header.track }</Link></li>
                    <li><Link to="/report">{ lang.header.report }</Link></li>
                    <li><Link to="/config">⚙️</Link></li>
                </ul>
            </nav>
        </Container>
    );
}
