import styled from 'styled-components';
import Link from '../../assets/link_black_24dp.svg';

export const Container = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    color: ${props => props.theme.fontColor};
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

export const Tracker = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.inputColor};
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 4px;
    padding-bottom: 30px;
    box-shadow: 0 0 100px -10px ${props => props.theme.bodyPrimary};

    h2 {
        font: 14pt 'JetBrains Mono', monospace;
        color: ${props => props.theme.inputColorColor};
        width: 80%;
        font-weight: 500;
        margin: 0 auto;
    }

    h2:first-child {
        padding-top: 25px;
    }

    input[type="url"] {
        border: solid 1px rgb(210, 210, 210);
        color: ${props => props.theme.inputColor};
        background-color: transparent;
        padding: 7px 25px 8px 45px;
        width: 50%;
        border: none;
        border-bottom: 2px solid ${props => props.theme.inputColor};
        outline: none;
        margin: 40px 10px 0 0;
        font: 11.5pt 'JetBrains Mono', monospace;
        font-weight: 400;
        background-image: url(${ Link });
        background-position: 3% 50%;
        background-repeat: no-repeat;
        
        ::placeholder {
            color: ${props => props.theme.inputColor};
        }
    }
    
    button {
        border: none;
        border-radius: 5px;
        background-color: transparent;
        padding: 10px 15px;
        margin: 30px 0 0 10px;
        font: 12pt 'JetBrains Mono', monospace;
        transition: all ease 0.5s;
        cursor: pointer;
        background-color: ${props => props.theme.bodyTerciary};
        color: ${props => props.theme.inputColor}
    }

    button:hover {
        transform: scale(1.05);
        opacity: 0.85;
    }

    span h2 {
        color: ${props => props.theme.inputColor};
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-top: 20vh;

        input[type="url"] {
            width: 60%;
            margin-right: 0;
            font-size: 10pt;
        }

        button {
            width: 30%;
            padding: 14px;
            margin-top: 30px;
            font-size: 13pt;
        }
    }
`;
