import React from 'react';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'grey':'white'
    }

  return (
    <div className='container py-2' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtiler</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.  
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>TextUtiler</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtiler reports a the number of words and characters. Thus it is suitable for writing text with word/ character limits.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This <strong>TextUtiler</strong> website works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suit to count characters in Facebook, Blogs, Books, Excel document, Essays etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
