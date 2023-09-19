import React, { useEffect, useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InteractiveTextEditor from './InteractiveTextEditor'

const Hero = () => {
    const [file, setFile] = useState("")
    const [isFileReady, setIsFileReady] = useState(false)
    //waits for when pdf file is converted to text and is served
    const onInputFileChange = (e) => {
        setFile(e.target.file)
        console.log(e.target.file)
        console.log(e.target.value)
    }
    // useEffect(() => {
    //     const res = await fetch('https://dummy.com/fake-endpoint')

    // })

    return (
        <div className="upload-wrapper">
            <div className="dynamic section">
                {isFileReady ?
                    <InteractiveTextEditor />
                    :
                    <div className="welcome-text">
                        <h1>
                            Upload a pdf and extract your text
                        </h1>
                        <img src="/si" alt="" srcset="" />
                        {/* <img src={file} alt="" /> */}
                    </div>
                }
            </div>
            <label className="upload-card" htmlFor="upload">
                <span className="custom-label upload-icon">
                    <FileUploadIcon style={{ fontSize: "4rem" }} />
                </span>
                <button className="upload-icon-button">
                    <label className="button-label" htmlFor="upload">
                        <p>Upload file</p>
                    </label>
                </button>
                <input onChange={(e) => { onInputFileChange(e) }} value={file} accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
                <p>or drop a file</p>
            </label>
        </div>
    )
}

export default Hero;