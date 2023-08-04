import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert('success', 'text is converted to upper case')
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert('success', 'text is converted to lower case')
    }
    const handleCapitalize = () => {
        try {


            let words = text.toLowerCase().split(' ')
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1)
            }
            setText(words.join(' '))
            props.showAlert('success', 'Every word capitalized')
        }
        catch {
            return 
        }


    }
    const handleClearClick = () => {
        setText('')
        props.showAlert('success', 'text area cleared')
    }
    const onChangeHandler = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="mb-3">
                <h3 className='my-3' style={props.mode === 'dark' ? { color: 'white' } : { color: 'black' }} >{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox1" rows="8" style={props.mode === 'dark' ? { backgroundColor: 'gray', color: 'white' } : { backgroundColor: 'white', color: 'black' }}></textarea><br />
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalise</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container" style={props.mode === 'dark' ? { color: 'white' } : { color: 'black' }}>
                <h2>Summary</h2>
                <p>characters:{text.length} and words:{(text.length > 0) ? (text.trim().split(' ').length) : 0} </p>
            </div>
            <div className="container" style={props.mode === 'dark' ? { color: 'white' } : { color: 'black' }}>
                <h3>Preview</h3>
                <p>{(text.length > 0) ? text : 'Enter text above to previes here'}</p>
            </div>
        </>
    )
}
