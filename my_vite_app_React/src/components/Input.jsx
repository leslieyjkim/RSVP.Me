import {useState} from "react";
/**
 * 
 * @param {text, onSubmit} props 
 * @returns 
 */

const Input = function(props) {
    const [text, setText] = useState("");

    const textChanged = function(event) {
        setText(event.target.value);
    };

    const save = function(event) {
        event.preventDefault();
        props.onSubmit(text);
        setText("");
    };

    return (
        <div className="input-form">
            <form onSubmit={save}>
                <input value={text}
                    onChange={textChanged}
                    name="name"
                    placeholder="Enter Name" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Input;

