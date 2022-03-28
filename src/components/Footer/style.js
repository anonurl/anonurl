import styled from 'styled-components';

export const Footer = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300,400,600&display=swap');    

    z-index: 999;
    font-family: 'JetBrains Mono', monospace;
    position: absolute;
    height: 250px;
    top: 200vh;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(30, 30, 30);

    @media (max-width: 800px) {
        top: 300vh;
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    ul {
        display: inline-block;
        text-align: left;
        margin: 15px 40px 0;
        padding: 0;
    }

    ul h2 {
        color: ${props => props.theme.inputColor};
        font-size: 15pt;
        font-weight: 600;
        border-bottom: 2px solid ${props => props.theme.bodyPrimary};
        transition: all ease 0.5s;
    }

    ul h2:hover {
        transform: scale(1.15);
    }

    ul li {
        list-style-type: none;
    }

    ul li a {
        font-weight: 400;
        color: ${props => props.theme.titleColor};
        text-decoration: none;
        transition: all ease 0.5s;
    }

    ul li a:hover {
        opacity: 0.6;
    }

    p {
        font-size: 11.5pt;
        font-weight: 500;
        text-align: center;
        color: ${props => props.theme.inputColor};
        margin-top: 50px;
    }

    p a {
        font-weight: 300;
        text-decoration: none;
        color: ${props => props.theme.titleColor};
        transition: all ease 0.5s;
    }

    p a:hover {
        opacity: 0.6;
    }
`;
