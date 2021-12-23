import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Report from './pages/Report';
import Track from './pages/Track';
import Config from './pages/Config';
import Redirect from './pages/Redirect';
import Error404 from './pages/404';

render (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/track" element={ <Track /> } />
            <Route path="/report" element={ <Report /> } />
            <Route path="/config" element={ <Config /> } />
            <Route path="/:id" element={ <Redirect /> } />
            <Route path="/404" element={ <Error404 /> } />
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);
