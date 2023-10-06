import React, { useEffect } from 'react'
import Button from '../components/Button'
import digitalServices, { DigitalService } from '../data/digitalServices'
import { List } from '../components/CheckList'
import businessServices, { BusinessService } from '../data/businessServices'
import { HashLinkWithFragment, isMobile } from '../utils'
import icons from '../ui/icons'
import InlineEmailForm from '../components/InlineEmailForm'
import { Link } from 'react-router-dom'

const Offerings = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='offerings-container'>
      <section className='offerings-header'>
        <small className='tag'>Offerings</small>
        <h1>
          Digital and Business services that{' '}
          <span className='lower-highlight'>accelerate your growth</span>
        </h1>
        <br />
        <p>Need a more in-depth information ? Drop your mail and we'll get back to you.</p>
        <br />
        <InlineEmailForm />
        <br />
      </section>
      <section className='offerings-main-container business-offerings-main-container '>
        <br />
        <h2>Digital solutions to industry problems</h2>

        <div className='digital-offerings-listing'>
          {digitalServices.map((service: DigitalService, index: number) => {
            const firstLine: string = service.shortDescription.split('.')[0]
            const rest: string = service.shortDescription
              .replace(firstLine.replace('.', ''), '')
              .replace('.', '')
              .trim()
            return (
              <article className='digital-offering-item' id={service.link.replace('#', '')}>
                <h5 dangerouslySetInnerHTML={{ __html: service.title }}></h5>
                {/* <p className='first-line'>{firstLine}</p> */}

                <img src={service.image} alt={service.title} />

                <p className='rest'>{firstLine}</p>
              </article>
            )
          })}
        </div>
      </section>
      <section className='offerings-main-container business-offerings-main-container'>
        <h2>We craft business solutions that help you with ...</h2>
        <br />
        <div className='offerings-main-grid'>
          {businessServices.map((service: BusinessService, index: number) => {
            return <BusinessOfferingItem service={service} key={index} index={index} />
          })}
        </div>
      </section>
      {/* <section className='offerings-main-container'>
        <h2>Cutting edge digital solutions</h2>
        <div className='offerings-main-grid'>
          {digitalServices.map((service: DigitalService, index: number) => {
            return <DigitalOfferingItem service={service} key={index} index={index} />
          })}
        </div>
      </section> */}
    </div>
  )
}

const DigitalOfferingItem = ({ service, index }: { service: DigitalService; index: number }) => {
  const bullets = service.longDescription.split('.').slice(0, -1)
  return (
    <article className='digital-offerings-main-item' id={service.link.replace('#', '')} key={index}>
      <section className='offerings-main-item-info'>
        <h4
          dangerouslySetInnerHTML={{
            __html: service.title,
          }}
        ></h4>
        <br />
        <List list={bullets} />
      </section>
      <section className='offerings-main-item-image'>
        <img src={service.image} alt={service.title} />
      </section>
    </article>
  )
}

const BusinessOfferingItem = ({ service, index }: { service: BusinessService; index: number }) => {
  const isMobileDevice = isMobile()
  return (
    <article className='offerings-main-item' id={service.link.replace('#', '')} key={index}>
      <section className='offerings-main-item-image'>
        <img src={service.image} alt={service.title} />
        <div className='offerings-main-item-image-overlay'></div>

        {service.projectInfo && (
          <HashLinkWithFragment path={service.projectInfo.link}>
            <div className='business-offering-link-project'>{icons.arrowUpRight}</div>
          </HashLinkWithFragment>
        )}
      </section>
      <section className='offerings-main-item-info'>
        <small className='orange'>{service.title}</small>

        {isMobileDevice ? (
          <h5>
            <div className='svg-icon'>{service.icon} </div> {service.weCanHelpYouWith}
          </h5>
        ) : (
          <h5>
            {service.icon} {service.weCanHelpYouWith}
          </h5>
        )}
        <p>{service.shortDescription}</p>
        {/* <HashLinkWithFragment path={`portfolio?service=${service.title}`}>
          See projects {icons.arrowUpRight}
        </HashLinkWithFragment> */}
      </section>
    </article>
  )
}

export default Offerings
