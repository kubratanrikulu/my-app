import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='home-page' style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition : 'center'}} >
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light bg-transpatent">
                    <a class="navbar-brand d-none" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ fontSize: '23px' }} class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="pages/About" class="nav-link text-white">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="pages/Resume" class="nav-link text-white">Resume</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="pages/Blog" class="nav-link text-white">Blog</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="pages/Contact" class="nav-link text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
            <section style={{ marginTop: '15rem'}} className='p-2'>
                <div className='container'>
                <div className='row'>
                    <div style={{ backgroundColor: 'rgba(0,0,0, 0.4)', border: '2px solid #f1f1f1'}} className='banner-text p-5 text-align-center'>
                    <h1 style={{ fontWeight: 'bolder' }} className='text-white display-1'>Kübra Tanrıkulu</h1>
                    <h3 style={{ fontWeight: 'bold' }} className='text-white display-4 mt-5 p-3'>I'm Frontend Developer</h3>
                    <h5 style={{ fontWeight: 'bold' }} className='text-white mt-5 p-3'>based in İstanbul</h5>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-lg-end flex-sm-row'>
                        <div style={{ fontSize: '25px' }} className='col-12 icons text-white p-5 d-flex flex-lg-column'>
                            <div className='instagram'>
                                <BsInstagram />
                            </div>
                            <div className='twitter'>
                                <FaTwitterSquare />
                            </div>
                            <div className='github'>
                                <BsGithub />
                            </div>
                            <div className='medium'>
                                <BsMedium />
                            </div>
                            <div className='linkedln'>
                                <BsLinkedin />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Navbar