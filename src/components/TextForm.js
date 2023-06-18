import React, { useState } from 'react';


export default function TextForm(props) {

    const handleClear = () => {
        if (text.length > 0) {
            setText('');
            props.showAlert("All text has been cleared", "success");
        }
        else {
            props.showAlert("Nothing to clear in text area", "warning");
        }
    };

    const handleUppercase = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text converted to uppercase", "success");
        }
        else {
            props.showAlert("Nothing in text area", "warning");
        }
    };

    const handleLowercase = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text converted to lowercase", "success");
        }
        else {
            props.showAlert("Nothing in text area", "warning");
        }
    };

    const handleRemoveSpaces = () => {
        if (text.length > 0) {
            setText(text.replace(/\s+/g, ' '));
            props.showAlert("Extra spaces removed", "success");
        }
        else {
            props.showAlert("Nothing in text area", "warning");
        }

    }

    const handleCopy = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard", "success");
        }
        else {
            props.showAlert("Nothing to copy in text area", "warning");
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className='container mt-5' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0000001a', color: props.mode === 'light' ? 'black' : 'white' }} id="box" rows="8"></textarea>
                </div>
                <button className={`btn btn-primary ${props.mode}`} onClick={handleClear}>Clear text</button>
                <button className={`btn btn-primary ${props.mode}`} onClick={handleUppercase}>Convert to Uppercase</button>
                <button className={`btn btn-primary ${props.mode}`} onClick={handleLowercase}>Convert to Lowercase</button>
                <button className={`btn btn-primary ${props.mode}`} onClick={handleRemoveSpaces}>Remove extra spaces</button>
                <button className={`btn btn-primary ${props.mode}`} onClick={handleCopy}>Copy to clipboard</button>

                <div className="container my-3">
                    <h2 className='mt-5'>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((e) => { return e.length > 0 }).length} <b>words</b>, {text.length} <b>characters</b></p>
                    <p>{text.split(/\s+/).filter((e) => { return e.length > 0 }).length * 0.008} minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
                </div>

            </div>


        </>
    )
};
