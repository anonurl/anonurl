import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Report } from './style';
import { post } from 'axios';

export default () => {
    const handleSubmit = async () => {
        const report = document.querySelector('#report').value;

        await post('/api/report', {
            message: report
        })

        .then(() => {
            alert('Thanks for your report, it helps us improve the security!');
            window.location.href = '/';

        });
    }

    return (
        <Container>
            <Header />
            <Report>
                <h2>Do you have any suspicious URL or comment? Send a message to us!</h2>
                <textarea rows="5" maxrows="5" id="report" onKeyDown={e => e.key === 'Enter' && handleSubmit()} placeholder="Enter the message" />
                <button onClick={() => handleSubmit()}>Send report</button>
            </Report>
            <Footer />
        </Container>
    );
}
