import FileUploadIcon from '@mui/icons-material/FileUpload';
import "../styles/upload-card.css"
import { useEffect, useState } from 'react';

const UploadCard = ({ setFile, setSwitch }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const onInputFileChange = (e) => {
        setSwitch(true)
    }
    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])
    return (


        width < 830 ?
            <label style={{ marginTop: "2rem" }} className="" htmlFor="upload">
                <button className="upload-icon-button">
                    <label className="button-label" htmlFor="upload">
                        <p>Upload file</p>
                    </label>
                </button>
                <input onChange={(e) => { setFile(e.target.files[0]); onInputFileChange(e) }} accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
            </label>
            :
            <label className="upload-card" htmlFor="upload">
                <span className="custom-label upload-icon">
                    <FileUploadIcon style={{ fontSize: "4rem" }} />
                </span>
                <button className="upload-icon-button">
                    <label className="button-label" htmlFor="upload">
                        <p>Upload file</p>
                    </label>
                </button>
                <input onChange={(e) => { setFile(e.target.files[0]); onInputFileChange(e) }} accept=".pdf, .jpg" type="file" name="pdfFile" id="upload" />
                <p>or drop a file</p>
            </label>

    )
}

export default UploadCard