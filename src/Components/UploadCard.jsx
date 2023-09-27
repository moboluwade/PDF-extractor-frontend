import FileUploadIcon from '@mui/icons-material/FileUpload';


const UploadCard = ({file, setFile, setTriggerFetch, setSwitch}) => {

    const onInputFileChange = (e) => {
        setTriggerFetch(true)
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

            <input onChange={(e) => { setFile(e.target.value); onInputFileChange(e) }} value={file} accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
            <p>or drop a file</p>
        </label>
    )
}

export default UploadCard