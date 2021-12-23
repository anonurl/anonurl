import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap');

body {
    background-color: blue;
}
`;

export const ShortenerArea = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.fontColor};
    float: none;
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 10%;
    text-align: center;
`;

export const Shortener = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    color: ${props => props.theme.fontColor};
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 1px 1px 3px 3px ${props => props.theme.bodyPrimary};

    h2 {
        font: 12pt 'JetBrains Mono', monospace;
        color: ${props => props.theme.titleColor};
    }

    h2:first-child {
        padding-top: 25px;
    }

    input[type="url"] {
        border: solid 1px rgb(210, 210, 210);
        border-radius: 5px;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.inputBackground};
        padding: 8px;
        width: 60%;
        outline: none;
        margin: 20px 10px 0 0;
        font: 12pt 'JetBrains Mono', monospace;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: ${props => props.theme.bodyPrimary};
        padding: 9px;
        color: ${props => props.theme.inputColor};
        font: 12pt 'JetBrains Mono', monospace;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    button:hover {
        transform: scale(1.1);
        opacity: 0.8;
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
            width: 80%;
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

export const About = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    height: 100vh;
    position: absolute;
    top: 100vh;
    right: 0;
    left: 0;
    text-align: center;
    color: ${props => props.theme.fontColor};

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
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.fontColor};
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    transition: all ease 0.2s;

    :hover {
        transform: scale(1.05);
    }
    
    p {
        font: 12pt 'JetBrains Mono', monospace;
        font-weight: 600;
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
        background-color: ${props => props.theme.bodyPrimary};
        transition: all ease 0.2s;
    }

    section:hover {
        transform: scale(1.02);
    }

    section p {
        font: 11pt 'JetBrains Mono', monospace;
        font-weight: 300;
        width: 80%;
        margin: 10px auto;
    }

    section p a {
        color: ${props => props.theme.aColor};
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
