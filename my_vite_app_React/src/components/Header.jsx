// Displays the title and the current user
// Has a logout button

// @param {text, logout} props
// @returns

const Header = function (props) {

    return (
        <div className="Header">
            <div>{props.text}</div>
            <button onClick={props.logout}>Sign Out</button>
        </div>
    );
};


export default Header;