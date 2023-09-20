import { Link, useLocation } from 'react-router-dom'
import icons from '../ui/icons'
import Button from './Button'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import logo from '../assets/images/logo.svg'
import { Fragment, useEffect, useState } from 'react'
import digitalServices, { DigitalService } from '../data/digitalServices'
import businessServices, { BusinessService } from '../data/businessServices'
import { HashLinkWithFragment, isMobile } from '../utils'

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isMobileDevice: boolean = isMobile()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else setIsScrolled(false)
    })
  })

  return (
    <div className='header-outer-container'>
      <div
        className={`header-desktop-container ${
          !isScrolled && location.pathname !== '/contact' && 'no-scroll'
        } ${isMobileDevice && !isScrolled && 'mobile-border'}`}
      >
        <section className='header-banner'>
          <span className='header-banner-left'>
            <div className='header-banner-tag'>NEW</div>
            <small>
              {isMobileDevice
                ? 'Application Maintainence - our newest offering'
                : 'Explore our newly launched offering - Cloud Migration, read more '}
            </small>
            {isMobileDevice ? (
              <small>
                <Link to='#digital-offerings-container'>{icons.arrowRightLong} </Link>
              </small>
            ) : (
              <Fragment>
                &nbsp;
                <HashLinkWithFragment path='#digital-offerings-container'>
                  <small>here</small>
                  {icons.arrowRightLong}
                </HashLinkWithFragment>
              </Fragment>
            )}
          </span>
        </section>
        <section className='header-main'>
          <section className='header-main-left'>
            <Link to='/'>
              <div className='header-logo'>
                <img src={logo} alt='3more IT services logo' />
                {/* <h5>3MORE</h5> */}
              </div>
            </Link>

            {!isMobileDevice && (
              <NavigationMenu.Root className='nav-root'>
                <NavigationMenu.List className='nav-list'>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className='nav-trigger'>
                      <p>
                        <Link to='/offerings'>
                          Offerings <span className='caret-down'>{icons.chevronDown}</span>
                        </Link>
                      </p>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='nav-content'>
                      <section className='nav-column'>
                        <Link to='/offerings'>
                          <h5>Digital Offerings</h5>
                        </Link>
                        <ul>
                          {digitalServices.map((service: DigitalService, index: number) => (
                            <li>
                              <HashLinkWithFragment path={'offerings' + service.link} key={index}>
                                {service.title.match(
                                  /(?<=<span className="highlight">).*?(?=<\/span>)/,
                                )?.[0] || ''}{' '}
                                {icons.arrowUpRight}
                              </HashLinkWithFragment>
                            </li>
                          ))}
                        </ul>
                      </section>
                      <section className='nav-column'>
                        <Link to='/offerings'>
                          <h5>Business Offerings</h5>
                        </Link>
                        <ul>
                          {businessServices.map((service: BusinessService, index: number) => (
                            <li>
                              <HashLinkWithFragment path={'offerings' + service.link} key={index}>
                                {service.title} {icons.arrowUpRight}
                              </HashLinkWithFragment>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <Link to='/portfolio' className='nav-trigger'>
                      Portfolio
                    </Link>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <Link to='/about' className='nav-trigger'>
                      About Us
                    </Link>
                  </NavigationMenu.Item>

                  <NavigationMenu.Indicator className='nav-indicator'>
                    <div className='nav-arrow' />
                  </NavigationMenu.Indicator>
                </NavigationMenu.List>

                <div className='viewport-position'>
                  <NavigationMenu.Viewport className='nav-viewport' />
                </div>
              </NavigationMenu.Root>
            )}
          </section>
          {/* <Button variant='primary'>Get in touch</Button> */}
          {!isMobileDevice && (
            <Link to='/contact' className='contact-us'>
              Contact us {icons.arrowUpRight}
            </Link>
          )}
          {isMobileDevice && (
            <NavigationMenu.Root className='nav-root nav-root-mobile'>
              <NavigationMenu.List className='nav-list'>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger asChild className='nav-trigger'>
                    <Link to='#'>Menu</Link>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className='nav-content mobile-content'>
                    <Link className='mobile-header-heading' to='/contact'>
                      Contact Us {icons.arrowUpRight}
                    </Link>
                    <Link className='mobile-header-heading' to='/portfolio'>
                      Portfolio {icons.arrowUpRight}
                    </Link>
                    <Link className='mobile-header-heading' to='/about'>
                      About Us {icons.arrowUpRight}
                    </Link>
                    <h6 className='mobile-header-heading'>Digital Offerings</h6>
                    <ul>
                      {digitalServices.map((service: DigitalService, index: number) => (
                        <li>
                          {/* <Link to={service.link}>
                            {service.title.match(
                              /(?<=<span className="highlight">).*?(?=<\/span>)/,
                            )?.[0] || ''}
                          </Link> */}
                          <HashLinkWithFragment path={'offerings' + service.link} key={index}>
                            {service.title.match(
                              /(?<=<span className="highlight">).*?(?=<\/span>)/,
                            )?.[0] || ''}
                            {icons.arrowUpRight}
                          </HashLinkWithFragment>
                        </li>
                      ))}
                    </ul>
                    <h6 className='mobile-header-heading'>Business Offerings</h6>
                    <ul>
                      {businessServices.map((service: BusinessService, index: number) => (
                        <li>
                          <HashLinkWithFragment path={'offerings' + service.link} key={index}>
                            {service.title}
                          </HashLinkWithFragment>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className='nav-indicator'>
                  <div className='nav-arrow' />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className='viewport-position'>
                <NavigationMenu.Viewport className='nav-viewport mobile-viewort' />
              </div>
            </NavigationMenu.Root>
          )}
        </section>
      </div>
    </div>
  )
}

export default Header
