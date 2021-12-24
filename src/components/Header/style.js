import styled from 'styled-components';

export const Container = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 52px;
    background-color: rgba(15, 15, 15, 0.65);
    
    nav {
        text-align: center;
        display: flex;
        justify-content: center;
    }

    nav ul {
        position: absolute;
    }

    nav ul li {
        list-style: none;
        padding-right: 20px;
        display: inline-block;
        transition: all ease 0.5s;
    }

    nav ul li a {
        color: white;
        font: 12.5pt 'JetBrains Mono', monospace;
        text-decoration: none;
    }

    nav ul li:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        nav ul li {
            padding-right: 12px;
        }
    }
`;
