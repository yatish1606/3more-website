import React from 'react'
import Button from '../components/Button'
import digitalServices, { DigitalService } from '../data/digitalServices'
import { List } from '../components/CheckList'

const Offerings = () => {
  return (
    <div className='offerings-container'>
      <section className='offerings-header'>
        <small className='tag'>Offerings</small>
        <h1>Digital and Business services that accelerate your growth</h1>
        <br />
        <p>Need a more in-depth information ? Drop your mail and we'll get back to you.</p>
        <form className='inline-form'>
          <input type='email' placeholder='your-email@mail.com' autoFocus autoComplete='on' />
          <Button type='submit'>Contact me</Button>
        </form>
      </section>
      <section className='digital-offerings-main-container'>
        <h2>Cutting edge digital solutions</h2>

        {digitalServices.map((service: DigitalService, index: number) => {
          return <DigitalOfferingItem service={service} key={index} />
        })}
      </section>
    </div>
  )
}

const DigitalOfferingItem = ({ service }: { service: DigitalService }) => {
  const bullets = service.longDescription.split('.').slice(0, -1)
  return (
    <article className='digital-offerings-main-item' id={service.link.replace('#', '')}>
      <section className='digital-offerings-main-item-info'>
        <h4 dangerouslySetInnerHTML={{ __html: service.title }}></h4>
        <br />
        <List list={bullets} />
      </section>
      <section className='digital-offerings-main-item-image'>
        <img src={service.image} alt={service.title} />
      </section>
    </article>
  )
}

export default Offerings
