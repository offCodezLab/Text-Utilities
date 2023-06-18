import React from 'react'

export default function About(props) {


    return (
        <>
            <div className='container'>
                <h1 className='my-5' style={{ color: props.mode === "light" ? "black" : "white", textAlign: "center" }}>About Us</h1>
                <h5 className='my-5' style={{ color: props.mode === "light" ? "black" : "white", textAlign: "center" }}>Welcome to Text Utilities. Analyze your text with our single page appliaction!</h5>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${"about-" + props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${"about-" + props.mode}`}>
                                <strong>Text Utilities</strong> is a single page appliaction that let you analyze your text in no time. You can perform various actions of your choice on text and the copy them to your clipboard.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${"about-" + props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${"about-" + props.mode}`}>
                                <strong>Text Utilities</strong> is a free to use web application and have no special kind of restrictions.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${"about-" + props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Fast and lightweight
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${"about-" + props.mode}`}>
                                <strong>Text Utilities</strong> is not only free to use but also a fast and lightweight way to analyze text.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
