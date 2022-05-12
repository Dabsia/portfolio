import React from 'react'
import { Link } from 'react-router-dom'
import './Job.css'

const Job = ({name, jobDesc, language, githubLink,img}) => {
  return (
    
    <div className='jobContainer' >
            <img src = {img} className = 'jobImg' alt = {img} />
            <div className = 'special'>
                <h3 className='productName'>{name}</h3>
                <div className='Icons'>
                <a className='iconLink'  href = {githubLink}> <i className="ri-github-fill icon"></i></a>
                <Link className='iconLink' to = '/'> <i className="ri-link icon"></i></Link>
                </div>
            </div>
            <p className='productDesc'>{jobDesc}</p>

            <p className='languages'>{language}</p>
    </div>
  )
}

export default Job