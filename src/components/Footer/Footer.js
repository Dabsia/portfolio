import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>


      <div className='footerBtnContainers'>

        <a href="mailto:dabojohnson98@gmail.com" target='blank'>
          <div className='footer_links'>
            <i className="ri-mail-fill icons"></i>
          </div>
        </a>


        <a href='https://www.linkedin.com/in/dabo-johnson-5b39a8211/' target='blank' >
          <div className='footer_links'>
            <i className="ri-linkedin-fill icons"></i>
          </div>
        </a>

        <a href='https://github.com/Dabsia' target='blank' >
          <div className='footer_links'>
            <i className="ri-github-fill icons"></i>
          </div>
        </a>

        <a href='https://twitter.com/johnson_dabo' target='blank' >
          <div className='footer_links'>
            <i className="ri-twitter-line icons"></i>
          </div>
        </a>


      </div>

    </div>
  )
}

export default Footer