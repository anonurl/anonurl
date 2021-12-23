import styled from 'styled-components';

export const Container = styled.footer`
    z-index: 999;
    color: black;
    background-color: rgb(240, 240, 240, 0.8);
    font: 12pt 'JetBrains Mono', monospace;
    position: absolute; 
    left: 0;
    right: 0;
    text-align: center;

    nav {
        margin-left: -45px;
    }

    nav ul {
        list-style: none;
    }

    nav ul li {
        display: inline-block;
        margin-left: 10px;
    }

    nav ul li:first-child::after {
        content: ' |'
    }

    nav ul li a {
        text-decoration: none;
        color: #3366ff;
    }

    nav ul li a:hover {
        opacity: 0.65;
    }

    @media (max-width: 800px) {
        nav ul li {
            display: block;
        }

        nav ul li:first-child::after {
            content: '';
        }

        nav ul li:first-child {
            margin-bottom: 10px;
        }
    }
`;
