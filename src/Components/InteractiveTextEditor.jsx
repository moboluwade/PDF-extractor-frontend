import React, { useEffect, useState } from 'react'
import "../styles/interactive-text-editor.css"
import { Textarea } from "@mui/joy"
import HomeIcon from '@mui/icons-material/Home';

const InteractiveTextEditor = ({ textData }) => {
    const [pdfText, setPdfText] = useState(textData)
    useEffect(() => {
        setPdfText(textData)
    }, [textData])

    const updateValue = (e) => {
        setPdfText(e.target.value)
    }

    return (
        <div className='text-area-wrapper'>
            <a href="/" className='home-icon'>
                <HomeIcon fontSize='large' />
            </a>
            <Textarea
                className="editor"
                value={pdfText}
                onChange={(e) => { updateValue(e) }}
                placeholder="Bootstrap"
                minRows={15}
                sx={{
                    '--Textarea-focusedInset': 'var(--any, )',
                    '--Textarea-focusedThickness': '0.1rem',
                    '--Textarea-focusedHighlight': '#00B4FF',
                    '&::before': {
                        transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: '#86b7fe',
                    },
                }}
            />
        </div>
    )
}

export default InteractiveTextEditor