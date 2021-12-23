import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, ShortenerArea, Shortener, About, Whyuse, Cards } from './style';
import { post } from 'axios';

import Anonymous from '../../assets/anonymous.png';
import Scan from '../../assets/scan.png';
import Report from '../../assets/report.png';
import Loading from '../../assets/loading.gif';

export default () => {
    const handleShorten = async () => {
        const url = document.querySelector('#url');
        const span = document.querySelector('.shortened');
        
        if (url.value.indexOf('http') === -1) {
            alert('Invalid URL address, you\'ve used "http://" or "https://"?');
            url.value = '';
        
        } else {
            const img = document.createElement('img');
            const br = document.createElement('br');
            img.src = Loading;
            img.width = 60;
            img.style.marginTop = '20px';
            span.append(br, img)

            await post('/api/create', {
                url: url.value
            })

            .then(({ data }) => {
                span.innerHTML = '';

                const h2 = document.createElement('h2');
                h2.innerHTML = `Your shortened URL: <a href=${window.location.href + data.id} target="_blank">${window.location.href + data.id}</a>`;
                h2.style.fontSize = '10pt';

                span.append(h2);
            });
        }
    }

    return (
        <Container>
            <Header />
            <ShortenerArea>
                <Shortener className="shortener">
                    <h2>Anonymous, free and open-source</h2>
                    <h2>No logs and tracking</h2>
                    <input type="url" id="url" onKeyDown={e => e.key === 'Enter' && handleShorten()} placeholder="Enter the link" />
                    <button onClick={() => handleShorten()}>Shorten</button>
                    <span className="shortened"></span>
                </Shortener>
            </ShortenerArea>
            <About>
                <h1>Why use AnonURL</h1>
                <Whyuse>
                    <p>Anonymous, free, open-source, easy-to-use, shortened URLs, nothing about logs, security improved...</p>
                </Whyuse>
                <Cards>
                    <section>
                        <img title="by Flaticon" src={ Anonymous } width="200" />
                        <p>We don't keep access logs and who created any shortened URL</p>
                    </section>
                    <section>
                        <img title="by Flaticon" src={ Scan } width="200" />
                        <p>Suspicious of any URL? Check all about <Link to="/track">here</Link></p>
                    </section>
                    <section>
                        <img title="by Flaticon" src={ Report } width="200" />
                        <p>You can report any malicious shortened URL by <Link to="/report">clicking here</Link></p>
                    </section>
                </Cards>
            </About>
            <Footer />
        </Container>
    );
}
