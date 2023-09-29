import InteractiveTextEditor from './InteractiveTextEditor'

const DynamicSection = ({switchToITE, result}) => {
    console.log("result in dynamic section", result)
    return (
        <div className="dynamic section">
            {switchToITE ?
                <InteractiveTextEditor textData={result} />
                :
                <div className="welcome-text">
                    <h1>
                        Upload a pdf and extract your text
                    </h1>
                </div>
            }
        </div>
    )
}

export default DynamicSection