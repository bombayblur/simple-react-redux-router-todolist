import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title, buttonClicked, showFormFunc}) => {
    const onClick = () => {
        showFormFunc();
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={buttonClicked ? 'red': 'green'} text={buttonClicked ? 'Close' : 'Add'} onclick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title:'Default Title',
    body:'Default Body'
}

Header.propTypes = {
    body:PropTypes.string.isRequired
}

// CSS in JS: just add as variable to style param
//
// const headerStyle = {
//     backgroundColor:'gray'
// }

export default Header

