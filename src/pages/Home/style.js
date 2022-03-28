import styled from 'styled-components';
import Link from '../../assets/link_black_24dp.svg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300,400,600&display=swap');
`;

export const ShortenerArea = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    color: ${props => props.theme.fontColor};
    float: none;
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 12.1%;
    text-align: center;

    img {
        position: absolute;
        top: 70vh;
        right: 0;
        left: 0;
    }

    @media (max-width: 1000px) {
        img {
            top: 80vh;
        }
    }

    @media (max-width: 800px) {
        img {
            top: 85vh;
        }
    }
    
    @media (max-width: 600px) {
        img {
            opacity: 0;
        }
    }
`;

export const Shortener = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.fontColor};
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 4px;
    padding-bottom: 30px;
    box-shadow: 0 0 100px -10px ${props => props.theme.bodyPrimary};

    h2 {
        font: 13pt 'JetBrains Mono', monospace;
        font-weight: 500;
        color: ${props => props.theme.inputColor};
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

    a {
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    a:hover {
        opacity: 0.65;
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-top: 20vh;

        input[type="url"] {
            width: 60%;
            margin-right: 0;
            font-size: 11pt;
        }

        button {
            padding: 12px 25px;
            margin-top: 30px;
            font-size: 13pt;
        }
    }
`;

export const About = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    position: absolute;
    min-height: 100vh;
    top: 100vh;
    right: 0;
    left: 0;
    text-align: center;
    color: ${props => props.theme.inputColor};

    h1 {
        font: 34pt 'JetBrains Mono', monospace;
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 25pt;
        }
    }
`;

export const Whyuse = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: ${props => props.theme.bodySecondary};
    color: ${props => props.theme.inputColor};
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    transition: all ease 0.2s;

    :hover {
        transform: scale(1.05);
    }
    
    p {
        font: 12pt 'JetBrains Mono', monospace;
        font-weight: 500;
    }

    @media (max-width: 800px) {
        width: 80%;

        p {
            font-size: 10pt;
        }
    }
`;

export const Cards = styled.div`
    margin: 20px auto;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        border-radius: 5px;
        width: 300px;
        height: 280px;
        position: relative;
        color: white;
        padding: 30px 0 30px 0;
        margin: 0 auto;
        margin-right: 30px;
        margin-top: 40px;
        background-color: ${props => props.theme.bodySecondary};
        transition: all ease 0.2s;
    }

    section:hover {
        transform: scale(1.02);
    }

    section p {
        font: 11pt 'JetBrains Mono', monospace;
        font-weight: 400;
        width: 80%;
        margin: 10px auto;
    }

    section p a {
        color: ${props => props.theme.bodyTerciary};
            text-decoration: none;
        }

    section p a:hover {
        opacity: 0.65;
    }

    @media (max-width: 800px) {
        flex-wrap: wrap;
        width: 100%;

        section {
            margin: 20px auto;
        }
    }
`;
