import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='home-page' style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-transpatent">
                    <a className="navbar-brand d-none" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ fontSize: '18px' }} className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active me-5">
                                <Link to="pages/About" className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="pages/Resume" className="nav-link text-white">Resume</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="pages/Blog" className="nav-link text-white">Blog</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="pages/Contact" className="nav-link text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
            <section style={{ marginTop: '2rem' }} className='p-2'>
                <div className='container'>
                    <div className='row'>
                        <div style={{ backgroundColor: 'rgba(0,0,0, 0.5)', border: '2px solid #f1f1f1', borderRadius:'20px' }} className='banner-text p-5 text-align-center'>
                            <h1 style={{ fontWeight: 'bolder' }} className='text-white display-1'>Kübra Tanrıkulu</h1>
                            <h3 style={{ fontWeight: 'bold' }} className='text-white display-4 mt-5 p-3'>I'm Frontend Developer</h3>
                            <h5 style={{ fontWeight: 'bold' }} className='text-white mt-5 p-3'>based in İstanbul</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-xl-end flex-sm-row'>
                        <div style={{ fontSize: '25px' }} className='col-12 icons text-white p-5 d-flex flex-lg-column justify-content-between'>
                            <div className='instagram'>
                                <a className='text-white' href=''><BsInstagram /></a>
                            </div>
                            <div className='twitter'>
                                <a className='text-white' href=''> <FaTwitterSquare /></a>
                            </div>
                            <div className='github'>
                                <a className='text-white' href=''> <BsGithub /></a>
                            </div>
                            <div className='medium'>
                                <a className='text-white' href=''> <BsMedium /></a>
                            </div>
                            <div className='linkedln'>
                                <a className='text-white' href=''>  <BsLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar