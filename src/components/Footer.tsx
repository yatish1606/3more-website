import { Link } from 'react-router-dom'
import LinkedIn from '../assets/images/linkedin.png'
import GoogleMaps from '../assets/images/googlemaps.png'
import { isMobile } from '../utils'

const Footer = (): JSX.Element => {
  const isMobileDevice: boolean = isMobile()

  return (
    <footer className='footer-container'>
      <section className='footer-top'>
        <section className='footer-left'>
          <div className='footer-links'>
            <Link to='#'>Home</Link>
            <Link to='#'>Portfolio</Link>
            <Link to='/offerings'>Services</Link>
            <Link to='#'>About Us</Link>
            <Link to='#'>FAQ</Link>
            <Link to='/contact'>Contact Us</Link>
          </div>
          <small>&copy; 2023 3MORE IT Services Ltd. All rights reserved</small>
        </section>
        <section className='footer-right'>
          <Link
            className='footer-socials'
            to='https://www.google.com/maps/search/34+Parvati+View+H+Society+,+Sane+Guruji+Road+Pune+411030/@18.503565,73.8404371,15z/data=!3m1!4b1?entry=ttu'
            target='_blank'
          >
            <img src={GoogleMaps} alt='Google Maps Link' />
          </Link>

          <Link
            className='footer-socials'
            to='https://www.google.com/maps/search/34+Parvati+View+H+Society+,+Sane+Guruji+Road+Pune+411030/@18.503565,73.8404371,15z/data=!3m1!4b1?entry=ttu'
            target='_blank'
          >
            <img src={LinkedIn} alt='LinkedIn' />
          </Link>
        </section>
      </section>
      <section className='footer-bottom'>
        <small>
          Creative design by{' '}
          <span>
            <Link to='https://yatishkelkar.netlify.com'>@yatish</Link>
          </span>{' '}
          for 3MORE IT Services Ltd.
        </small>
      </section>
    </footer>
  )
}

export default Footer
