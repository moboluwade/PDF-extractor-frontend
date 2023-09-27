import { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';


const UploadCard = ({setResult, setSwitch, fetchProcessedText}) => {
    const [file, setFile] = useState("")

    const onInputFileChange = (e) => {
        setFile(e.target.file)
        // const result = ()=>fetchProcessedText(file)
        // setResult()
        setResult(file)
        setSwitch(true)
    }

    return (
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
    )
}

export default UploadCard