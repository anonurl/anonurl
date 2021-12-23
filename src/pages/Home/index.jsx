import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, ShortenerArea, Shortener, About, Whyuse, Cards } from './style';
import { post } from 'axios';
import Anonymous from '../../assets/anonymous.png';
import Scan from '../../assets/scan.png';
import Report from '../../assets/report.png';
import Loading from '../../assets/loading.gif';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../styles/themes';
import { en, pt } from '../../assets/locales';
import { useEffect, useState } from 'react';

export default () => {
    useEffect(() => {
        const themeStoraged = localStorage.getItem('theme');
        const langStoraged = localStorage.getItem('lang');

        if (!themeStoraged) {
            localStorage.setItem('theme', 'light');

        }
        
        if (!langStoraged) {
            localStorage.setItem('lang', 'en');
            window.location.reload();

        }


    }, [window.onload]);

    const theme = localStorage.getItem('theme');
    document.body.style.backgroundColor = theme === 'light' ? light.bodySecondary : dark.bodySecondary;
    const lang = localStorage.getItem('lang') === 'en' ? en : pt;

    const handleShorten = async () => {
        const url = document.querySelector('#url');
        const span = document.querySelector('.shortened');
        span.innerHTML = '';

        if (url.value.indexOf('http') === -1) {
            alert(lang.home.invalid);
            url.value = '';
        
        } else {
            const img = document.createElement('img');
            const br = document.createElement('br');
            img.src = Loading;
            img.width = 60;
            img.style.marginTop = '20px';
            span.append(br, img);

            await post('https://api-anonurl.herokuapp.com/api/create', {
                url: url.value
            })

            .then(({ data }) => {
                span.innerHTML = '';

                const h2 = document.createElement('h2');
                h2.innerHTML = `${lang.home.shortened} <a href=${window.location.href + data.id} target="_blank">${window.location.href + data.id}</a>`;
                h2.style.fontSize = '10pt';

                span.append(h2);
            });
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <Header />
            <Container>
                <ShortenerArea>
                    <Shortener className="shortener">
                        <h2>{ lang.home.shortenerTitle }</h2>
                        <h2>{ lang.home.shortenerSubTitle }</h2>
                        <input type="url" id="url" onKeyDown={e => e.key === 'Enter' && handleShorten()} placeholder={ lang.home.placeholder } />
                        <button onClick={() => handleShorten()}>{ lang.home.button }</button>
                        <span className="shortened"></span>
                    </Shortener>
                </ShortenerArea>
                <About>
                    <h1>{ lang.home.whyuseTitle }</h1>
                    <Whyuse>
                        <p>{ lang.home.whyuseSubTitle }</p>
                    </Whyuse>
                    <Cards>
                        <section>
                            <img title="by Flaticon" src={ Anonymous } width="200" />
                            <p>{ lang.home.anonymousCard }</p>
                        </section>
                        <section>
                            <img title="by Flaticon" src={ Scan } width="200" />
                            <p>{ lang.home.trackCard } <a href="/track">/track</a></p>
                        </section>
                        <section>
                            <img title="by Flaticon" src={ Report } width="200" />
                            <p>{ lang.home.reportCard } <a href="/report">/report</a></p>
                        </section>
                    </Cards>
                </About>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
