import React, { useState } from 'react'

const InteractiveTextEditor = () => {
    const [pdfText, setPdfText] = useState('')
    // this should take in the resulting data from the api
    // is empty string as test

    const updateValue = (e) => {
        setPdfText(e.target.value)
    }

    return (
        <div>
            <textarea value={pdfText} onChange={(e) => { updateValue(e) }} name="editable-text" id="editable-textarea" placeholder='Pdf is loading...' >
            </textarea>
        </div>
    )
}

export default InteractiveTextEditor