import React from 'react' 


export default function About(props) {
    // let myStyle = {
    //     color : "white",
    //     backgroundColor : "black"
    // }
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }


    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Analyze Your Text
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or etc.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Being fully accessible and obtainable with little regard to restrictions.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Browser Compatibility
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">The ability of a certain website or app to appear fully functional on different browsers that are available in the market.
                            This means that your website's HTML coding, as well as the scripts on that website, should be compatible to run on all browsers your users might use.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
