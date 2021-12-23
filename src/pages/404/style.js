import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;

    h1 {
        font: 80pt bold, 'JetBrains Mono', monospace;
    }

    h2 {
        font: 20pt bold, 'JetBrains Mono', monospace;
    }
    
    @media (max-width: 800px) {
        margin-top: 80px;

        h1 {
            font-size: 70pt;
        }

        h2 {
            font-size: 16pt;
        }
    }
`;
