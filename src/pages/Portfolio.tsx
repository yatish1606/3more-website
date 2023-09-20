import React from 'react'
import InlineEmailForm from '../components/InlineEmailForm'
import projects, { Project } from '../data/project'
import { useSpringCarousel } from 'react-spring-carousel'
import { List } from '../components/CheckList'
import Button from '../components/Button'
import icons from '../ui/icons'

const Portfolio = (): JSX.Element => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-header'>
        <small className='tag'>PORTFOLIO</small>
        <h1>Our projects and portfolio</h1>
        <br />
        <p>Need a more in-depth information ? Drop your mail and we'll get back to you.</p>
        <br />
        <InlineEmailForm />
        <br />
      </div>
      {/* <div className='portfolio-floating-menu'>
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
      </div> */}
      <div className='projects-container'>
        {projects
          .filter(p => p.images.length)
          .map((project: Project) => (
            <ProjectItem project={project} />
          ))}
      </div>
      <div className='projects-container projects-container-without-image'>
        {projects
          .filter(p => !p.images.length)
          .map((project: Project) => (
            <ProjectItemWithoutImage project={project} />
          ))}
      </div>
    </div>
  )
}

const ProjectItem = ({ project }: { project: Project }): JSX.Element => {
  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem, slideToItem } =
    useSpringCarousel({
      // withLoop: true,
      withThumbs: true,
      itemsPerSlide: 1,
      items: project.images.map((image, index) => ({
        id: index + '',
        renderItem: (
          <div className='project-image-slide'>
            {image.includes('mp4') ? (
              <video className='project-video' autoPlay muted src={image}></video>
            ) : (
              <img src={image} alt='project-image' />
            )}
          </div>
        ),
        renderThumb: (
          <div className='project-image-thumb-slide' onClick={() => slideToItem(index)}>
            {image.includes('mp4') ? (
              <video className='project-thumb-video'>
                <source src={image.concat('#t=0.1')} />
              </video>
            ) : (
              <img src={image} alt='project-thumb' />
            )}
          </div>
        ),
      })),
    })

  return (
    <div className='project-container'>
      <div className='project-header'>
        <small className='orange'>{project.title}</small>
        <h2>{project.marketingTitle}</h2>
      </div>
      <div className='project-main'>
        {project.images && (
          <div className='project-image'>
            <div className='project-image-main'>{carouselFragment}</div>
            <div className='project-image-thumbnail'>{thumbsFragment}</div>
          </div>
        )}
        <div className='project-info'>
          <h6>{project.about}</h6>
          <br />
          <List list={project.keyFunctionality || []} />
          <br />
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='no-default-a'
            href={project.downloadLink}
            download={'3MORE - ' + project.title}
          >
            <Button>{icons.download} Download brochure</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

const ProjectItemWithoutImage = ({ project }: { project: Project }): JSX.Element => {
  return (
    <div className='project-container'>
      <div className='project-header'>
        <small className='orange'>{project.title}</small>
        <h2>{project.marketingTitle}</h2>
      </div>
      <div className='project-main'>
        <div className='project-info'>
          <h6>{project.about}</h6>
          <List list={project.keyFunctionality || []} />
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='no-default-a'
            href={project.downloadLink}
            download={'3MORE - ' + project.title}
          >
            <Button>{icons.download} Download brochure</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
