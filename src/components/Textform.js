import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        document.title = 'ConvertText - UpperCase'
        setTimeout(() => {
          document.title = 'ConvertText'
          }, 1000);      
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        document.title = 'ConvertText - LowerCase'
        setTimeout(() => {
          document.title = 'ConvertText'
          }, 1000);      
    }
    const handleclearClick = ()=>{
      let newText = "";
      setText(newText)
      document.title = 'ConvertText - Clear Text'
      setTimeout(() => {
        document.title = 'ConvertText'
        }, 1000);
    }
    const handlecopy = ()=>{
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value)
      document.title = 'ConvertText - Copy Text'
      setTimeout(() => {
        document.title = 'ConvertText'
        }, 1000);    
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      document.title = 'ConvertText - Remove Extra Spaces'
      setTimeout(() => {
        document.title = 'ConvertText'
        }, 1000);    
    }
      const handlecapClick = ()=>{
      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) { arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);}
      const newtext = arr.join(" ");
      setText(newtext)
      document.title = 'ConvertText - Capitalized'
      setTimeout(() => {
        document.title = 'ConvertText'
        }, 1000);    
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }


const [text, setText] = useState('');
  return (
    <>
<div className={`my-3 container-${props.mode}  bg-${props.mode}`}>
  <h4 htmlFor="exampleFormControlTextarea1" className={`form-label mx-2 py-3  text-${props.mode === 'light'? 'dark':'light'} `}>Enter text for convert</h4>
  <textarea className="form-control mb-3 border-0 shadow-none" placeholder='Enter Any Text Here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode === 'dark'? '#1b1b1b':'white' , color: props.mode === 'dark'? 'white':'black'}}></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloClick}>lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecapClick}>Capitalized</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopy}>Copy</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>

</div> 
<div className={`container py-5 text-${props.mode === 'light'? 'dark':'light'} `}>
  <h2>Your Text Summary</h2>
  <p>Total Words = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
  <p>Total Characters = {text.length} </p>
  <p>Average Human Take {parseFloat(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} Minutes to read it</p>
</div>
    </>
  )
}
