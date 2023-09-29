import React, {useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import UploadCard from "./UploadCard";
import DynamicSection from "./DynamicSection";

const UPLOAD_ENDPOINT = "https://wesen-api-osoj.onrender.com/upload_pdf/"
// const UPLOAD_ENDPOINT = "https://wesen-api.onrender.com/upload_pdf/"
// console.log(process.env.UPLOAD_ENDPOINT)



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

    // const fetchProcessedFile = async (file) => {
    //     console.log("before try and catch")
    //     try {
    //         console.log("sending request now")
    //         const formData = new FormData()
    //         formData.append("pdf_file", file)

    //         const response = await axios.post(UPLOAD_ENDPOINT, formData, {
    //             headers: {
    //                 "Access-Control-Allow-Credentials": "true",
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //                 "Access-Control-Allow-Headers": "Content-Type",
    //                 "Content-type": "multipart/form-data",
    //             }
    //         }).then(response => {
    //             // console.log("success!");
    //             // console.log("test",response.data)
    //             const processedText = response.data
    //             console.log("pure response", response)
    //             console.log("this is the response.data", processedText)
    //             return processedText
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchProcessedFile = async (file) => {
        console.log("before try and catch");
        try {
          console.log("sending request now");
          const formData = new FormData();
          formData.set("pdf_file", file);
    
          const response = await axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
              "Content-type": "multipart/form-data",
            },
          });
          
          const processedText = response.data;
          console.log("pure response", response);
          console.log("this is the response.data", processedText);
          return processedText;
        } catch (error) {
          console.log(error);
        }
      };

    // useEffect(
    //     () => {
    //         const fetchResponse = async () => {
    //             if (isMounted.current && file) {
    //                 const response = await fetchProcessedFile(file)
    //                 console.log("new-response", response)
    //                 setResult(response)
    //                 console.log("this is a log of result: ",result)
    //             } else {
    //                 isMounted.current = true
    //             }
    //         }
    //         fetchResponse()

    //         // if (isMounted.current) {
    //         //     const response = fetchProcessedFile(file).then()
    //         //     console.log("new-response", response)
    //         //     setResult(response || "PDF is loading...")
    //         // } else {
    //         //     isMounted.current = true
    //         // }
    //     },
    //     [file]
    // )
    const isMounted = useRef(false)
    useLayoutEffect(() => {
        const fetchResponse = () => {
          if (isMounted.current) {
            fetchProcessedFile(file)
              .then((response) => {
                    console.log("should show response:", response)
                    setResult(response || "PDF Testing...")
                    // setResult((prevResult)=>response || prevResult || "PDF testing...");
                    // console.log("should show result:",result)
                })
                .catch((error) => {
                    console.error("Error fetching response:", error);
                    setResult("PDF encountered an error uploading...");
                });
            } else {
            isMounted.current = true;
          }
        };
    
        fetchResponse();
      }, [file]);

    //   useLayoutEffect((response) => {
    //     console.log("After updating result:", result);
    //     // setResult((prevResult)=>response || prevResult || "This is malfunctioning...");
    //   }, [result]);

    // send file state when triggerFetch chnges to true
    //how to collect async value from a function within a react component
    
    return (
        <div className="upload-wrapper">
            <DynamicSection switchToITE={switchToITE} result={result} />
            <UploadCard setFile={setFile} setSwitch={setSwitchToITE} />
        </div>
    )
}

export default Hero;