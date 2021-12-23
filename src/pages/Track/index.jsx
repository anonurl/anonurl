import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Tracker } from './style';
import { get } from 'axios';

export default () => {
    const handleTrack = async () => {
        const track = document.querySelector('#track');
        const result = document.querySelector('.result');
        const h2 = document.createElement('h2');
        result.innerHTML = '';

        await get('/api/track/' + track.value)
        
        .then(({ data: r }) => {
            h2.innerText = `URL: ${r.url}\n\nCreation Date: ${r.create}\n\nClicks: ${r.clicks}`;
            h2.style.color = 'black';
        
        })

        .catch(() => {
            h2.innerText = 'URL/ID not founded on database.'
            track.value = '';
            h2.style.color = '#ff3333';

        });

        result.append(h2);
    }

    return (
        <Container>
            <Header />
            <Tracker>
                <h2>Track any ID or URL</h2>
                <input type="url" onKeyDown={e => e.key === 'Enter' && handleTrack()} id="track" placeholder="Enter the URL or ID" />
                <button onClick={() => handleTrack()}>Search</button>
                <span className="result"></span>
            </Tracker>
            <Footer />
        </Container>
    );
}
