import React, { useEffect, useState } from 'react'

const InteractiveTextEditor = ({textData}) => {
    // console.log("textData/result in ITE:",textData)
    const [pdfText, setPdfText] = useState(textData)
    useEffect(()=>{
        setPdfText(textData)
    },[textData])
    // this should take in the resulting data from the api
    // is empty string as test
    
    const updateValue = (e) => {
        console.log("before",pdfText)
        setPdfText(e.target.value)
        console.log("after",pdfText)
        setTimeout(()=>{
            autoSave(pdfText)
        },1000
        )
    }
    const autoSave = ()=>{
        console.log("outside function:",pdfText)
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