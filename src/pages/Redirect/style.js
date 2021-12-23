import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3366ff;
    color: white;
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

export const Redirect = styled.div`
    background-color: white;
    color: black;
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 1px 1px 3px 1px rgb(170, 170, 170);

    h2 {
        font: 12pt 'JetBrains Mono', monospace;
        color: rgb(130, 130, 130);
        width: 80%;
        margin: 0 auto;
    }

    h2:first-child {
        padding-top: 25px;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: #3366ff;
        padding: 9px;
        color: white;
        font: 12pt 'JetBrains Mono', monospace;
        transition: all ease 0.5s;
        cursor: pointer;
        margin: 10px 10px 0 10px;
    }

    button:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-top: 20vh;

        button {
            width: 30%;
            padding: 14px;
            margin-top: 30px;
            font-size: 13pt;
        }
    }
`;
