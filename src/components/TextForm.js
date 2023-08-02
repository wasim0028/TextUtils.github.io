import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, SetText] = useState("")



    const UpClick = () => {
        let newText = Text.toUpperCase()
        SetText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const DnClick = () => {
        let lowText = Text.toLowerCase()
        SetText(lowText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const clean_UpClick = () => {
        let clean_Text = ''
        SetText(clean_Text)
        props.showAlert("Clear Textarea", "success")
    }

    const copyClick = () => {
        navigator.clipboard.writeText(Text)
        props.showAlert("Copying Text", "success")
    }

    const ExtraSpaces = () => {
        let newText = Text.split(/[ ]+/)
        SetText(newText.join(" "))
        props.showAlert("Removing Extraspace", "success")
    }

    const handleOnChange = (Event) => {
        SetText(Event.target.value)
    }

    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#1b3958' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={Text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={UpClick}>Uppercase</button>
                <button disabled={Text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={DnClick}>Lowercase</button>
                <button disabled={Text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={clean_UpClick}>Clean</button>
                <button disabled={Text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={copyClick}>Copy</button>
                <button disabled={Text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={ExtraSpaces}>ExtraSpaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    )
}
