import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Card(props) {
    // usestate for textchanger functions
    const [text, setText] = useState(``);

    // uppercase function
    function upper() {
        setText(text.toUpperCase());
        props.showAlert('success', 'Converted To Uppercase');
        // rectifier func of word count
    }
    

    // lowercase func
    function lower() {
        setText(text.toLowerCase());
        props.showAlert('success', 'Converted To Lowercase!!!');

        // clear panel function
    }
    function reset() {
        setText(``)
        props.showAlert('success', 'Cleared!!!');

    }
    // copy text function
    function copy() {
        let input = document.getElementById('textArea');
        input.select();
        navigator.clipboard.writeText(input.value);
        props.showAlert('success', 'Text Copied!!!');
        document.getSelection().removeAllRanges();
    }
    // edit input changer function
    function change(event) {
        setText(event.target.value)
    }


    // component
    return (
        <>
            <div className='container my-2'>
                <div className='container'>
                    <h5 className={`card-title text-${props.mode === 'dark' ? 'light' : 'dark'} my-3`}>{props.cardTitle}</h5>
                    <div className="my-2">
                        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} name="Enter Your Text" id="textArea" placeholder='Enter Your Text' value={text} onChange={change} rows="10" ></textarea>
                    </div>
                    <button disabled={text.length===0}className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2 my-2`} onClick={upper}>Transform UpperCase</button>
                    <button disabled={text.length===0}className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2 my-2`} onClick={lower}>Transform LowerCase</button>
                    <button disabled={text.length===0}className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2 my-2`} onClick={copy}>Copy Text</button>
                    <button disabled={text.length===0}className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-2 my-2`} onClick={reset}>Reset Panel</button>


                </div>

                <div className={` form-control container my-4 bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`}  >
                    <h3>Text Stats</h3>
                    <br />
                    <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    {/* /\s+/ is regular expression for taking new lines and spaces,+ for more than one */}
                    <p>Time needed to read : {((text.split(/\s+/).filter((element)=>{return element.length!==0}).length) * 0.008).toFixed(2)} Minutes</p>

                    <br />
                    <h3>Input Preview</h3>
                    <p>{text.length > 1 ? text : "Enter Text To Preview"}</p>

                </div>
            </div>
        </>
    )
}

Card.proptype = { cardTitle: PropTypes.string.isRequired }
