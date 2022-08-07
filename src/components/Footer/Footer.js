import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h3>Contact Me</h3>

      <div className='footerBtnContainers'>
      
        <a href="mailto:dabojohnson98@gmail.com"> <button className='cta'><i className="ri-mail-fill icons"></i>Send an email</button></a>
        
      
        <a href='https://www.linkedin.com/in/dabo-johnson-5b39a8211/' ><button className='cta'><i className="ri-linkedin-fill icons"></i>LinkedIn</button></a>
        
        <a href = 'https://github.com/Dabsia' ><button className='cta'><i className="ri-github-fill icons"></i>Github</button></a>
      </div>
    </div>
  )
}

export default Footer