import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    useEffect(()=>{
        console.log('footer use effect');
    });

    return (
        <footer>
            <h3 className="animate__animated animate__bounce">Task App 😀</h3>
            <Link to="/about"> About Us</Link>
        </footer>
    )
}

export default Footer
