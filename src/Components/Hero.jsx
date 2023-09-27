import React, {useState} from "react";
import axios from "axios";
import UploadCard from "./UploadCard";
import DynamicSection from "./DynamicSection";

const UPLOAD_ENDPOINT = "https://wesen-api.onrender.com/upload_pdf/"

const fetchProcessedFile = async (file) => {
    try {
        console.log("sending request")
        const formData = new FormData()
        formData.set("pdf_content", file)
        const response = await axios.post(UPLOAD_ENDPOINT, file, {
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Credentials": "false",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Content-type": "application/pdf",
                "Access-Control-Allow-Credentials": "true"
            }
        })

        const processedText = await response.json()
        
        console.log(processedText)
        return processedText

    } catch (error) {
        console.log(error)
    }
}

//fetch function has to do three things//
//1. send the file across over the internet
    // -is triggered when the file is sent from UploadCard(or in this case changed)
//2. retrieve the response from sending the file
    // -store that response where? or no need for that, just pass it along into DynamicSection
//3. notify the frontend that the response is ready
    // -once response has been returned let InteractiveTextEditor know the file is ready
    //[i'll make an alternative to just switch to InteractiveTextEditor immedidately the file is sent, and then add a loading screen there.]
    // - in the interactiveTextEditor if t

const Hero = () => {
    const [switchToITE, setSwitchToITE] = useState(false)
    const [result, setResult] = useState("")

    return (
        <div className="upload-wrapper">
            <DynamicSection switchToITE={switchToITE} result={result}/>
            <UploadCard setResult={setResult} setSwitch={setSwitchToITE} fetchProcessedText={fetchProcessedFile}/>
        </div>
    )
}

export default Hero;