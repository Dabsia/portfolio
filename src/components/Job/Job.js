import React from 'react'
import './Job.css'

const Job = ({name, jobDesc, language,url, githubLink,img}) => {
  return (
    
    <div className='jobContainer' >
            <img src = {img} className = 'jobImg' alt = {name} />
            <div className = 'special'>
                <h3 className='productName'>{name}</h3>
                <div className='Icons'>
                <a className='iconLink' target = 'blank' href = {githubLink}> <i className="ri-github-fill icon"></i></a>
                <a className='iconLink' target = 'blank' href={ url} > <i className="ri-link icon"></i></a>
                </div>
            </div>
            <p className='productDesc'>{jobDesc}</p>
            <p className='languages'>{language}</p>
    </div>
  )
}

export default Job