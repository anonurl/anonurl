import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../styles/themes';
import { Container } from './style';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    const theme = localStorage.getItem('theme');
    document.body.style.backgroundColor = theme === 'light' ? light.bodySecondary : dark.bodyPrimary;

    return (
        <ThemeProvider theme={ theme === 'light' ? light : dark }>
            <Header />
            <Container>
                <h1>404</h1>
                <h2>{ lang.notfound.resource }</h2>
            </Container>
            <Footer />
        </ThemeProvider>
    );
};
