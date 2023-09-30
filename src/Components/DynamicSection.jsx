import InteractiveTextEditor from './InteractiveTextEditor'
import "../styles/dynamic-section.css"


const DynamicSection = ({ switchToITE, result }) => {
    
    const setWidth = (switchToITE)=>{
        return switchToITE ? "100%" : "50%"
    }
    let width;
    if (window.innerWidth > 830) {
        width = "100%"
    } else {
        width = setWidth(switchToITE)
        console.log(switchToITE)
        console.log(width)
    }
    console.log(width)
    
    return (
        <div style={{ maxWidth: width }} className="dynamic-section">
            {switchToITE ?
                <InteractiveTextEditor textData={result} />
                :
                <div className="welcome-text-div">
                    <h1>
                        Upload a pdf and extract your text
                    </h1>
                </div>
            }
        </div>
    )
}

export default DynamicSection