import React, { useEffect, useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Upload = () => {
    const [file, setFile] = useState("")
    const onInputFileChange = (e) => {
        setFile(e.target.file)
        console.log(e.target.file)
        console.log(e.target.value)
    }
    
    return (
        <div className="upload-wrapper">
            <div className="welcome-text dynamic-section display-text">
                <h1>
                    Upload a pdf and extract your text
                </h1>
                <img src="/si" alt="" srcset="" />
                {/* <img src={file} alt="" /> */}
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

export default Upload;