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
                        <img className="mt-5" src={'https://i.pinimg.com/564x/3d/a2/ed/3da2eda16216514aab723133e972428c.jpg'} />
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
                                <span style={{ color: '#dadada', fontWeight: '500'}} className="mb-5">Name:</span>
                                <p className="d-inline ms-3">Kübra Tanrıkulu</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500'}} className="mb-5">Email:</span>
                                <p style={{color: '#009e66'}} className="d-inline ms-3">ktanrikuluu@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500'}} className="mb-5">Age:</span>
                                <p className="d-inline ms-3">21</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <span style={{ color: '#dadada', fontWeight: '500'}} className="mb-5">From:</span>
                                <p className="d-inline ms-3">İstanbul</p>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex align-items-center">
                            <button className="text-white border-none p-3 px-5 mt-5" style={{ backgroundColor:'#009e66', borderRadius:'35px'}}>Dowload CV</button>
                            <ul className="about-social">

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default About;