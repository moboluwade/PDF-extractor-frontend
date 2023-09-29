import React, { useEffect, useState } from 'react'

const InteractiveTextEditor = ({textData}) => {
    const [pdfText, setPdfText] = useState(textData)
    useEffect(()=>{
        setPdfText(textData)
    },[textData])

    const updateValue = (e) => {
        setPdfText(e.target.value)
    }

    return (
        <div>
            <textarea value={pdfText} onChange={(e) => { updateValue(e) }} name="editable-text" id="editable-textarea" >
                {pdfText}
            </textarea>
        </div>
    )
}

export default InteractiveTextEditor