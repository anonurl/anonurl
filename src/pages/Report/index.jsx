import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Report } from './style';
import { post } from 'axios';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../styles/themes';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    const theme = localStorage.getItem('theme');
    document.body.style.backgroundColor = theme === 'light' ? light.bodyPrimary : dark.bodyPrimary;

    const handleSubmit = async () => {
        const report = document.querySelector('#report').value;

        if (report !== '') {
            await post('https://api-anonurl.herokuapp.com/api/report', {
                message: report
            })

            .then(() => {
                alert(lang.report.message);
                window.location.href = '/';

            });
        
        } else {
            alert(lang.report.empty);
            report.focus;

        }
    }

    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === 'light' ? light : dark }>
            <Header />
            <Container>
                <Report>
                    <h2>{ lang.report.title }</h2>
                    <textarea rows="5" maxrows="5" id="report" onKeyDown={e => e.key === 'Enter' && handleSubmit()} placeholder={ lang.report.placeholder } />
                    <button onClick={() => handleSubmit()}>{ lang.report.button }</button>
                </Report>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
