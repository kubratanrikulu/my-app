import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light bg-transpatent">
                    <a class="navbar-brand d-none" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ fontSize: '20px' }} class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#about.html">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <section style={{ marginTop: '15rem' }} className='p-2'>
                <div className='row'>
                    <h1 style={{ fontWeight: 'bolder' }} className='text-white display-1'>Kübra Tanrıkulu</h1>
                    <h3 style={{ fontWeight: 'bold' }} className='text-white display-4 mt-5 p-3'>I'm Frontend Developer</h3></div>
            </section>
            <section>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <div style={{ fontSize: '25px' }} className='icons text-white p-5'>
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