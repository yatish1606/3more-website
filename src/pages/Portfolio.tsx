import React from 'react'
import InlineEmailForm from '../components/InlineEmailForm'
import projects, { Project } from '../data/project'

const Portfolio = (): JSX.Element => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-header'>
        <small className='tag'>PORTFOLIO</small>
        <h1>Our projects and portfolio</h1>
        <br />
        <p>Need a more in-depth information ? Drop your mail and we'll get back to you.</p>
        <InlineEmailForm />
      </div>
      <div className='portfolio-floating-menu'>
        <article className='portfolio-menu-item active'>
          <p>PTWikki</p>
        </article>
        <article className='portfolio-menu-item'>
          <p>ENT e-Seva</p>
        </article>
        <article className='portfolio-menu-item'>
          <p>HRMS</p>
        </article>
        <article className='portfolio-menu-item'>
          <p>ReserveTheTable</p>
        </article>
        <article className='portfolio-menu-item'>
          <p>FinaQA</p>
        </article>
      </div>
      <div className='projects-container'>
        {projects.map((project: Project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  )
}

const ProjectItem = ({ project }: { project: Project }): JSX.Element => {
  return (
    <div className='project-container'>
      <div className='project-info'>
        <small className='orange'>{project.title}</small>
        <h2>{project.marketingTitle}</h2>
      </div>
    </div>
  )
}

export default Portfolio
