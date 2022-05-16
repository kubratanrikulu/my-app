import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaReact } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { ImQuotesRight } from "react-icons/im";

const About = () => {
    return (
        <div className="bg-black text-white">
            <div className="container">
                <div className="row">
                    <h4 className="text-center mt-5">Get to know me</h4>
                    <h1 style={{ fontWeight: 'bolder', fontSize: '60px' }} className="text-center">About Me</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img className="mt-5" src={"https://i.pinimg.com/564x/3d/a2/ed/3da2eda16216514aab723133e972428c.jpg"} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div style={{ borderBottom: '1px solid rgb(255 255 255 / 23%)' }} className="about-text mt-5">
                            <h4 style={{ color: '#009e66' }} className="mt-5">Who am I</h4>
                            <h2 className="mt-5">I'am Kübra Tanrıkulu, a Frontend Developer</h2>
                            <p className="mt-5 mb-5">
                                I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500' }} className="mb-5">Name:</span>
                                <p className="d-inline ms-3">Kübra Tanrıkulu</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500' }} className="mb-5">Email:</span>
                                <p style={{ color: '#009e66' }} className="d-inline ms-3">ktanrikuluu@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500' }} className="mb-5">Age:</span>
                                <p className="d-inline ms-3">21</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500' }} className="mb-5">From:</span>
                                <p className="d-inline ms-3">İstanbul</p>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex align-items-center">
                            <button className="text-white border-none p-3 px-5 mt-3" style={{ backgroundColor: '#009e66', borderRadius: '35px' }}>Dowload CV</button>
                            <ul className="about-social d-flex mb-0 align-items-center ms-3">
                                <li className="ms-3">
                                    <BsInstagram />
                                </li>
                                <li className="ms-3">
                                    <FaTwitterSquare />
                                </li>
                                <li className="ms-3">
                                    <BsGithub />
                                </li>
                                <li className="ms-3">
                                    <BsMedium />
                                </li>
                                <li className="ms-3">
                                    <BsLinkedin />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <h1 className="mt-5">My Services</h1>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div style={{ backgroundColor: '#161616' }} className="card-1 p-5">
                                    < FaReact style={{ color: '#009e66', fontSize: '5rem' }} />
                                    <h3 className="mt-3">Web Development</h3>
                                    <p style={{ color: '#9f9f9f' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div style={{ backgroundColor: '#161616' }} className="card-2 p-5">
                                    <IoMdCheckboxOutline style={{ color: '#009e66', fontSize: '5rem' }} />
                                    <h3 className="mt-3">Fully Responsive</h3>
                                    <p style={{ color: '#9f9f9f' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div style={{ backgroundColor: '#161616' }} className="card-3 p-5">
                                    <MdSupportAgent style={{ color: '#009e66', fontSize: '5rem' }} />
                                    <h3 className="mt-3">Customer Services</h3>
                                    <p style={{ color: '#9f9f9f' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="row">
                        <p>What My clients think about me</p>
                        <h1>Testimonials</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div style={{ backgroundColor: '#161616' }} className="review-card p-5 rounded mt-5 mb-5">
                                <div className="review-client d-flex justify-content-between
                             mt-2 mb-3">
                                    <div className="media">
                                        <img className="img-fluid rounded-circle me-3 align-self-center" src={'http://exill.dk/demo/kitzu/template/img/client-1.jpg'} />
                                        <div className="client-details align-self-center">
                                            <h6 className="client-name ">Beyza Tekin</h6>
                                            <span className="client-job">Software Developer</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ImQuotesRight style={{ color: '#009e66', fontSize: '5rem', lineHeight: '100%' }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div style={{ backgroundColor: '#161616' }} className="review-card p-5 rounded mt-5">
                                <div className="review-client d-flex justify-content-between
                             mt-2 mb-3">
                                    <div className="media">
                                        <img className="img-fluid rounded-circle me-3 align-self-center" src={'http://exill.dk/demo/kitzu/template/img/client-1.jpg'} />
                                        <div className="client-details align-self-center">
                                            <h6 className="client-name ">Beyza Tekin</h6>
                                            <span className="client-job">Software Developer</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ImQuotesRight style={{ color: '#009e66', fontSize: '5rem', lineHeight: '100%' }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )

}
export default About;