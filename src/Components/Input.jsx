import React from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Opacity } from "@mui/icons-material";

const Input = ()=>{
    return(
        <div className="input-wrapper">
            <div className="input-container">
                <label htmlFor="input">
                    <FileUploadIcon style={{fontSize: "4rem"}} />
                </label>
                <p>Upload file</p>
                <input accept=".pdf, .jpg" type="file" name="pdfFile" id="input" />
            </div>
        </div>
    )
}

export default Input;