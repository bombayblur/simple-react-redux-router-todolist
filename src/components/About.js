import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let Footer = styled.div`
    text-align:center;
    `

function About() {
    

    return (
        <Footer>
            <p className = "animate__animated animate__bounce"style={{fontSize:'3rem'}}>🤩</p>
            <p>This is the about page.</p>
            <Link to={"/"}>Main Page</Link>
        </Footer>
    )
}

export default About
        