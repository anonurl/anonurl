import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    float: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 13%;
    text-align: center;

    @media (max-width: 800px) {
        height: 120vh;
    }
`;

export const Config = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.inputColor};
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 0 0 100px -10px ${props => props.theme.bodyPrimary};

    h2 {
        font: 12pt 'JetBrains Mono', monospace;
        width: 80%;
        font-weight: 500;
        margin: 0 auto;
    }

    h2:first-child {
        padding-top: 25px;
    }

    h2:not(:first-child) {
        margin-top: 30px;
    }

    select {
        margin-top: 20px;
        border: none;
        background-color: ${props => props.theme.bodyTerciary};
        padding: 7px;
        border-radius: 5px;
        color: white;
        font: 11pt 'JetBrains Mono', monospace;
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-top: 20vh;
    }
`;
