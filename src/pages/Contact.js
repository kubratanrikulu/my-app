import React from 'react';
import db from '../Firebase'
import {collection, addDoc } from "firebase/firestore"

function Contact() {
  const [content, setContent] = React.useState("");
  const [email, setEmail] = React.useState("");
  const send = async (e) => {
    e.preventDefault();
    if (content !== '') {
      await addDoc(collection(db, "send-message"), {
        email,
        content,
        completed: false
      });
      setContent("");
      setEmail("");
    }
  }
  return (
    <div style={{height:'100vh'}} className='bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='contact-head text-center text-white'>
            <p>Feel free to contact me anytimes</p>
            <h1>Get in Touch</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-7'>
            <form>
              <div className="form-group text-white">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="form-group text-white">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
              </div>
              <button onClick={send} className="text-white border-none p-3 px-5 mt-3" style={{ backgroundColor: '#009e66', borderRadius: '35px', border: 'none' }}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact