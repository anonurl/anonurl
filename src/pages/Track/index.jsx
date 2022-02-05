import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Tracker } from './style';
import { get } from 'axios';
import Loading from '../../assets/loading.gif';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../styles/themes';
import { en, pt } from '../../assets/locales';

export default () => {
    const langStoraged = localStorage.getItem('lang');
    const lang = langStoraged === 'en' ? en : pt;

    const theme = localStorage.getItem('theme');
    document.body.style.backgroundColor = theme === 'light' ? light.bodyPrimary : dark.bodyPrimary;

    const handleTrack = async () => {
        const track = document.querySelector('#track');
        const trackValue = String(track.value)

        if (track !== '') {
            let id

            if (trackValue.includes("http")) {
                id = trackValue.split("/")[3]
            
            } else {
                id = track.value

            }

            const result = document.querySelector('.result');
            const h2 = document.createElement('h2');

            const img = document.createElement('img');                                                                          
            const br = document.createElement('br');                                                                            
            img.src = Loading;                                                                                                                                         
            img.width = 60;                                                                                                                          
            img.style.marginTop = '20px';
            result.append(br, img);

            await get('https://api-anonurl.herokuapp.com/api/track/' + id)
            
            .then(({ data: r }) => {
                result.innerHTML = '';
                h2.innerText = `URL: ${r.url}\n\n${ lang.track.creation } ${r.create}`;
            
            })

            .catch(() => {
                result.innerHTML = '';
                h2.innerText = lang.track.notfound;
                track.value = '';
                h2.style.color = '#ff3333';

            });

            result.append(h2);
        
        } else {
            alert(lang.track.empty);
            track.focus;

        }
    }

    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === 'light' ? light : dark }>
            <Header />
            <Container>
                <Tracker>
                    <h2>{ lang.track.title }</h2>
                    <input type="url" onKeyDown={e => e.key === 'Enter' && handleTrack()} id="track" placeholder={ lang.track.placeholder } />
                    <button onClick={() => handleTrack()}>{ lang.track.button }</button>
                    <span className="result"></span>
                </Tracker>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
