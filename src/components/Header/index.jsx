import { Link } from 'react-router-dom';
import { Container } from './style';

export default () => (
    <Container>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/track">Track</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>
        </nav>
    </Container>
)
