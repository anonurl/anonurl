import { Link } from 'react-router-dom';
import { Container } from './style';
import Home from '../../assets/home_white_24dp.svg';
import Tracking from '../../assets/gps_fixed_black_24dp.svg';
import Report from '../../assets/flag_black_24dp.svg';
import Settings from '../../assets/settings_black_24dp.svg';

export default () => (
    <Container>
        <nav>
            <ul>
                <li title="Home"><Link to="/"><img src={ Home } width="24" /></Link></li>
                <li title="Tracking"><Link to="/track"><img src={ Tracking } width="24" /></Link></li>
                <li title="Report"><Link to="/report"><img src={ Report } width="24" /></Link></li>
                <li title="Settings"><Link to="/settings"><img src={ Settings } width="24" /></Link></li>
            </ul>
        </nav>
    </Container>
);
