import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.bodyPrimary};
    color: ${props => props.theme.fontColor};
    float: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 10%;
    text-align: center;

    @media (max-width: 800px) {
        height: 120vh;
    }
`;

export const Report = styled.div`
    background-color: ${props => props.theme.bodySecondary};
    color: ${props => props.theme.fontColor};
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 1px 1px 3px 1px ${props => props.theme.bodySecondary};

    h2 {
        font: 12pt 'JetBrains Mono', monospace;
        color: ${props => props.theme.titleColor};
        width: 70%;
        margin: 0 auto;
    }

    h2:first-child {
        padding-top: 25px;
    }

    textarea {
        border: solid 1px rgb(210, 210, 210);
        border-radius: 5px;
        padding: 8px;
        width: 85%;
        outline: none;
        margin: 20px 0 auto;
        font: 12pt 'JetBrains Mono', monospace;
        background-color: ${props => props.theme.inputBackground};
        color: ${props => props.theme.fontColor};
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: ${props => props.theme.bodyPrimary};
        color: ${props => props.theme.inputColor};
        padding: 9px;
        margin-left: 10px;
        margin-top: 30px;
        font: 12pt 'JetBrains Mono', monospace;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    button:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-top: 20vh;

        textarea {
            width: 80%;
            margin-right: 0;
            font-size: 10pt;
        }

        button {
            width: 40%;
            padding: 14px;
            margin-top: 30px;
            font-size: 12pt;
        }
    }
`;
