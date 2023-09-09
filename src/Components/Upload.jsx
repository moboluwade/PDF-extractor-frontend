import React from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const upload = () => {
    return (
        <div className="upload-wrapper">
            <div className="welcome-text dynamic-section display-text">
                <h1>
                    Upload a pdf and extract your text
                </h1>
            </div>
            <label className="upload-card" htmlFor="upload">
                <label className="custom-label upload-icon" htmlFor="upload">
                    <FileUploadIcon style={{ fontSize: "4rem" }} />
                </label>
                <button className="upload-icon-button">
                    <p>Upload file</p>
                    <input accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
                </button>
                <p>or drop a file</p>
            </label>
        </div>
    )
}

export default upload;