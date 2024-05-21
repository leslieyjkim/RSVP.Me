import {useState} from 'react';

/**
 * 
 * @param {login} props 
 * @returns 
 */


export default function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = function(event) {
        event.preventDefault();
        email && props.login(email, password);
    };

    return (
        <div className="LoginPage">
            <form className="LoginForm" onSubmit={onSubmit}>
                <p>
                    <input type="text" name="username"
                    value={email} placeholder="Enter Username or Email" 
                    onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <input type="password" name="password" 
                    value={password} placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                </p>
                <p className="submit">
                    <button type="submit" name="commit">Sign In</button>
                </p>
            </form>
        </div>
    );
};