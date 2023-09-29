import React, {useLayoutEffect, useRef, useState} from "react";
import axios from "axios";
import UploadCard from "./UploadCard";
import DynamicSection from "./DynamicSection";

const UPLOAD_ENDPOINT = `${process.env.UPLOAD_ENDPOINT_URL}`

//fetch function has to do three things//
//1. send the file across over the internet
    // -is triggered when the file is sent from UploadCard(or in this case changed)
//2. retrieve the response from sending the file
    // -store that response where? or no need for that, just pass it along into DynamicSection
//3. notify the frontend that the response is ready
    // -once response has been returned let InteractiveTextEditor know the file is ready
    //[i'll make an alternative to just switch to InteractiveTextEditor immedidately the file is sent, and then add a loading screen there.]
    // - set the result from the response and pass to InteractiveTextEditor

const Hero = () => {
    const [switchToITE, setSwitchToITE] = useState(false)
    const [result, setResult] = useState("PDF is loading...")
    const [file, setFile] = useState("")

    const fetchProcessedFile = async (file) => {
        try {
            const formData = new FormData()
            formData.set("pdf_content", file)
            const response = await axios.post(UPLOAD_ENDPOINT, formData, {
                headers: {
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Content-type": "multipart/form-data",
                }
            })
    
            const processedText = await response.data()
            return processedText
        } catch (error) {
            console.log(error)
        }
    }
    const isMounted = useRef(false)
    useLayoutEffect(
        ()=>{
            const triggerFetch = async() =>{
                if(isMounted.current){
                    const response = await fetchProcessedFile(file)
                    console.log("response ", response)
                    setResult(response || "PDF is loading...")
                    // console.log("result: ", result)
                }else{
                    isMounted.current = true
                }
            }
            triggerFetch();
        },
        [file]
    )

    return (
        <div className="upload-wrapper">
            <DynamicSection switchToITE={switchToITE} result={result}/>
            <UploadCard setFile={setFile} setSwitch={setSwitchToITE}/>
        </div>
    )
}

export default Hero;