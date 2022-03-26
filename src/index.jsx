import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Report from './pages/Report';
import Track from './pages/Track';
import Settings from './pages/Settings';
import Redirect from './pages/Redirect';

render (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/track" element={ <Track /> } />
            <Route path="/report" element={ <Report /> } />
            <Route path="/settings" element={ <Settings /> } />
            <Route path="/:id" element={ <Redirect /> } />
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);
