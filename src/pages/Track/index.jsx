import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Tracker } from './style';
import { get } from 'axios';

import Loading from '../../assets/loading.gif';

export default () => {
    const handleTrack = async () => {
        const track = document.querySelector('#track');
        const result = document.querySelector('.result');
        const h2 = document.createElement('h2');

        const img = document.createElement('img');                                                                          
        const br = document.createElement('br');                                                                            
        img.src = Loading;                                                                                                                                         
        img.width = 60;                                                                                                                          
        img.style.marginTop = '20px';
        result.append(br, img);

        await get('https://api-anonurl.herokuapp.com/api/track/' + track.value)
        
        .then(({ data: r }) => {
            result.innerHTML = '';
            h2.innerText = `URL: ${r.url}\n\nCreation Date: ${r.create}\n\nClicks: ${r.clicks}`;
            h2.style.color = 'black';
        
        })

        .catch(() => {
            result.innerHTML = '';
            h2.innerText = 'URL/ID not founded on database.'
            track.value = '';
            h2.style.color = '#ff3333';

        });

        result.append(h2);
    }

    return (
        <>
            <Header />
            <Container>
                <Tracker>
                    <h2>Track any ID or URL</h2>
                    <input type="url" onKeyDown={e => e.key === 'Enter' && handleTrack()} id="track" placeholder="Enter the URL or ID" />
                    <button onClick={() => handleTrack()}>Search</button>
                    <span className="result"></span>
                </Tracker>
            </Container>
            <Footer />
        </>
    );
}
