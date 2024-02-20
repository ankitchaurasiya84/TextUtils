import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//export default function TextForm(props) 
const TextForm =(props)=> 
{
  
  const [text, setText] = useState('');

  const handleUpClick = () => {
    if (document.getElementById("MyBox").value !== "") {
      
    // console.log("Upper case cliked" + text);
    //setText("You clicked on button");
    let newText = text.toUpperCase();
    setText(newText);
    
    }
    else{
      
      toast("Enter Text to Convert",{position:"top-center",autoClose:1500});
      
    }
  };
  const handleloClick = () => {
    if (document.getElementById("MyBox").value !== "") {
      let newText = text.toLowerCase();
      setText(newText);
    }
   else{
    toast("Enter Text to Convert",{position:"top-center",autoClose:1500,closeOnClick:false})
   }
  };

  const handleClrClick = () => {
    if (document.getElementById("MyBox").value !== ""){
      let newText = "";
    setText(newText);
    }
    
    else{
      toast("Allready cleared",{position:"top-center",autoClose:1500})
    }
  };
  // const Clipboard = () => {
  //const [copyText, setCopyText] = useState('');

  //const handleCopyText = (e) => {
  //   setCopyText(e.target.value);
  //}

  const copyToClipboard = () => {
    if (document.getElementById("MyBox").value !== ""){
      copy(text)
      toast(`You have copy `,{position:"top-center",autoClose:1500});
    }
    else{
      toast('Text is empty',{position:"top-center",autoClose:1500});
    }
//console.log( copy("Ankit Yourwehrfvhgse"));
   
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    if (document.getElementById("MyBox").value !== "") {
      const file = new Blob([document.getElementById("MyBox").value], {type: "text/plain",});
      element.href = URL.createObjectURL(file);
      element.download = "MyFile.txt";
      document.body.appendChild(element);
      element.click()
      toast("Downloading...",{position:"top-center",autoClose:1500})
    } else {
      toast("File is Empty",{position:"top-center",autoClose:1500});
    }
  };

  const HandleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    if (document.getElementById("MyBox").value !== ""){
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      toast("Extra space removed",{position:"top-center",autoClose:1500})
    }
    else{
      toast("Text is empty",{position:"top-center",})
    }
    
  };
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            onChange={HandleOnChange}
            value={text}
            placeholder="Enter text here"
            rows="9"
            style={{backgroundColor:props.mode==='dark'?'#302f30':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
          
         
        </button>
        
        {"    "}
        <button className="btn btn-primary" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        {"    "}
        <button className="btn btn-primary" onClick={handleClrClick}>
          Clear
        </button>
        {"    "}
        <button className="btn btn-primary" onClick={copyToClipboard}>
          Copy
        </button>
        {"    "}
        <button className="btn btn-primary" onClick={downloadTxtFile}>
          Download txt
        </button>
        {"    "}
        <button className="btn btn-primary" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1> Summary </h1>
        <p1>
          {" "}
          {text.split(" ").filter((elements)=>{return elements.length!==0}).length} word and character {text.length}{" "}
        </p1>
        <br></br>
        <p1> Reading time :- {text.split(" ").length * 0.008} minutes </p1>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
        <ToastContainer/>
      </div>
      
    </>
  );
}

export default TextForm;