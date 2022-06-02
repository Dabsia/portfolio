import React from 'react'
import { jobData } from '../Job/jobData'
import Job from '../Job/Job'
import './JobList.css'

const JobList = () => {
  return (
    <div>
      <h3 className='featuredProjects'>FEATURED PROJECTS</h3>
      <div className='jobList'>
          {
              jobData.map((job, id) => {
                  return (
                      <Job key = {id} name = {job.name} githubLink = {job.githubLink} jobDesc = {job.jobDesc} img = {job.img} language = {job.language} />
                  )
              })
          }
          
      </div>
      
    </div>
  )
}

export default JobList