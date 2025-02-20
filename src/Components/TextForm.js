import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase On Clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase!", "success");
    }

    const handleLoClick = ()=> {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase!", "success");
    }

    const handleClrClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(Text);
        props.showAlert("Copied To Clipboard!", "success");
    }

    const handleRemoveExtra =()=> {
        let newText = Text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking!", "success");
      }

    const HandleOnChange =(event) => {
        // console.log("handle On Changed");
        setText(event.target.value);
    }


    const [Text, setText] = useState('');
    // text = 'wrong way to change the text';
    // setText("wright way to change the text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={Text} style={{backgroundColor: props.mode==='dark'?'#5e5c5c':'white', color: props.mode==='dark'?'white':'black'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-success mx-1 m-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 m-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 m-1" onClick={handleClrClick}>Clear Text</button>
        <button disabled={Text.length===0} className="btn btn-success mx-1 m-1" onClick={handleCopy}>Copy</button>
        <button disabled={Text.length===0} className="btn btn-info mx-1 m-1" onClick={handleRemoveExtra}>Remove Extra Space</button>
        <button disabled={Text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Details</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
