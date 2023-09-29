import FileUploadIcon from '@mui/icons-material/FileUpload';


const UploadCard = ({ setFile, setSwitch}) => {

    const onInputFileChange = (e) => {
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

            <input onChange={(e) => {setFile(e.target.files[0]); onInputFileChange(e) }} accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
            <p>or drop a file</p>
        </label>
    )
}

export default UploadCard