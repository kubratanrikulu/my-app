import React from 'react'

function Blog() {
  return (
    <div className="blog" style={{color:'#D3D2D2', backgroundColor:"#222", height:'210vh'}} >
        <div className='container'>
          <div className='row'>
              <p className='text-center mt-5'>Check out my latest blog posts</p>
              <h2 className='text-center mt-3'>My Blog</h2>
          </div>
        <div className='row'>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"}  alt="photo"/>
                <h5>Javascript</h5>
                <i><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p></i>
            </div>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" alt="description of image" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"} />
                <h5>Javascript</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
            </div>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" alt="description of image" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"} />
                <h5>Javascript</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
            </div>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"}  alt="photo"/>
                <h5>Javascript</h5>
                <i><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p></i>
            </div>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" alt="description of image" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"} />
                <h5>Javascript</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
            </div>
            <div className='col-6 col-lg-4'>
                <img className="mt-5 w-100 mb-3" alt="description of image" src={"https://cdn.ixirweb.com/wp-content/uploads/2022/04/javascript-nedir.jpg"} />
                <h5>Javascript</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blog