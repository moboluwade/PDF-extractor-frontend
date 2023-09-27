import InteractiveTextEditor from './InteractiveTextEditor'

const DynamicSection = ({swtichToITE, result}) => {

    return (
        <div className="dynamic section">
            {swtichToITE ?
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