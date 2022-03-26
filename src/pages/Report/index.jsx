import Header from '../../components/Header';
import { Container, Report } from './style';
import { post } from 'axios';
import { en, pt } from '../../assets/locales';
import { ThemeProvider } from 'styled-components';
import { style } from '../../styles/themes';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

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
        <ThemeProvider theme={ style }>
            <Header />
            <Container>
                <Report>
                    <h2>{ lang.report.title }</h2>
                    <textarea rows="5" maxrows="5" id="report" onKeyDown={e => e.key === 'Enter' && handleSubmit()} placeholder={ lang.report.placeholder } />
                    <button onClick={() => handleSubmit()}>{ lang.report.button }</button>
                </Report>
            </Container>
        </ThemeProvider>
    );
}
