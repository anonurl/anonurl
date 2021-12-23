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

export const Tracker = styled.div`
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

    input[type="url"] {
        border: solid 1px rgb(210, 210, 210);
        border-radius: 5px;
        padding: 8px;
        width: 60%;
        outline: none;
        margin: 20px 10px 0 0;
        font: 12pt 'JetBrains Mono', monospace;
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
    }

    button:hover {
        transform: scale(1.1);
        opacity: 0.8;
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