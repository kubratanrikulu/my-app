import React from 'react';
import db from '../Firebase'
import { collection, addDoc } from "firebase/firestore"
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline, MdOutlineLocationOn } from "react-icons/md";


function Contact() {
  const [content, setContent] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [name, setName]= React.useState("");
  const send = async (e) => {
    e.preventDefault();
    if (content !== '') {
      await addDoc(collection(db, "send-message"), {
        name,
        email,
        subject,
        content,
        completed: false
      });
      setContent("");
      setEmail("");
      setSubject("")
      setName("");
    }
  }
  return (
    <div style={{ height: '150vh' }} className='contact bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='contact-head text-center text-white mt-5'>
            <p>Feel free to contact me anytimes</p>
            <h1>Get in Touch</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-7 mt-5'>
            <form className='text-white'>
              <div class="row">
                <div class="form-group col-md-6 "> 
                  <input type="text" class="form-control" id="input" placeholder="Name"
                   onChange={(e) => setName(e.target.value)} value={name}  />
                </div>
                <div class="form-group col-md-6">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
              </div>
              <div className="form-group text-white">
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e) => setSubject(e.target.value)} value={subject}></input>
              </div>
              <div className="form-group text-white">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
              </div>
              <button onClick={send} className="text-white border-none p-3 px-5 mt-3" style={{ backgroundColor: '#009e66', borderRadius: '35px', border: 'none' }}>Send</button>
            </form>
          </div>
          <div className='col-12 col-md-5 mt-5'>
            <div className='row'>
              <div style={{ color: '#009e66' }} className='contact-text'>
                <h3>Contact Info</h3>
                <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <ul style={{ listStyleType: 'none' }}>
                  <li>
                    <div className='media align-items-center'>
                      <span className='icon'>
                        <MdOutlineDriveFileRenameOutline style={{ fontSize: '2rem', color: '#009e66' }} />
                      </span>
                      <div className='info-details ms-3'>
                        <h5 className='info'>Name</h5>
                        <i><span>Kübra Tanrıkuulu</span></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media align-items-center'>
                      <span className='icon'>
                        <AiOutlineMail style={{ fontSize: '2rem' }} />
                      </span>
                      <div className='info-details ms-3'>
                        <h5 className='info'>Email</h5>
                       <i> <span><a style={{ color: '#009e66' }} href='mailto:ktanrikuluu@gmail.com'>ktanrikuluu@gmail.com</a></span></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media align-items-center'>
                      <span className='icon'>
                        <MdOutlineLocationOn style={{ fontSize: '2rem' }} />
                      </span>
                      <div className='info-details ms-3'>
                        <h5 className='info'>Location</h5>
                       <i><span>İstanbul</span> </i> 
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact