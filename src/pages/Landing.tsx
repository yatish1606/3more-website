import { Fragment, MutableRefObject, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import icons from '../ui/icons'
import { LandingCarouselItem, landingCarouselItems } from '../data/landingCarousel'
import { Link } from 'react-router-dom'
import { List, CheckList } from '../components/CheckList'
import demoImage from '../assets/images/demo.jpg'
import digitalServices, { DigitalService } from '../data/digitalServices'
import { useSpringCarousel, useTransitionCarousel } from 'react-spring-carousel'
import businessOfferingArtList, { BusinessOfferingArtItem } from '../data/businessServicesArt'
import businessServices, { BusinessService } from '../data/businessServices'
import pictureGallery from '../assets/images/picture-gallery-landing.svg'
import finaQAImage from '../assets/images/finaqua.png'
import meetingImage from '../assets/images/meeting.jpg'
import workImage from '../assets/images/work.jpg'
import webdevImage from '../assets/images/webdev.jpg'
import uxImage from '../assets/images/ux.jpg'
import testimonials, { Testimonial } from '../data/testimonial'
import graphImage from '../assets/images/graph.jpg'
import { isMobile } from '../utils'

const Landing = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<any>(null)
  const delay: number = 5000
  const carouselHeight: number = window.innerHeight - 112 - 224 - 64 + 64 + 48
  const [previousTransform, setPreviousTransform] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState<string>('BFSI')

  const bfsiRef = useRef<HTMLDivElement | null>(null)
  const manufacturingRef = useRef<HTMLDivElement | null>(null)
  const healthcareRef = useRef<HTMLDivElement | null>(null)

  const isMobileDevice: boolean = isMobile()

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setPreviousTransform(
        index !== 0
          ? prevValue =>
              prevValue - 1 * (index % 2 === 0 ? carouselHeight * 1.5 : carouselHeight * 0.65)
          : 0,
      )
      setIndex(prevIndex => (prevIndex === landingCarouselItems.length - 1 ? 0 : prevIndex + 1))
      if (index === 4) {
        setIndex(0)
        resetTimeout()
      }
    }, delay)
  })

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  const CarouselColumn = ({
    column,
    n,
  }: {
    column: BusinessOfferingArtItem[]
    n: number
  }): JSX.Element => {
    const { carouselFragment } = useSpringCarousel({
      carouselSlideAxis: 'y',
      itemsPerSlide: column.length,
      withLoop: true,
      items: column.map((item: BusinessOfferingArtItem, index: number) => ({
        id: index + '',
        renderThumb: true,
        renderItem: (
          <div
            className='business-offerings-art-item'
            style={{ backgroundColor: item.backgroundColor || '#262e32' }}
          >
            {item.image && <img src={item.image} alt='business-offering' />}
            {item.icon || null}
          </div>
        ),
      })),
    })
    return <Fragment>{carouselFragment}</Fragment>
  }

  const LandingCarousel = (): JSX.Element => {
    const { carouselFragment } = useSpringCarousel({
      itemsPerSlide: 2,
      // withLoop: true,
      withThumbs: false,
      items: landingCarouselItems.map((item: LandingCarouselItem, index: number) => ({
        id: item.title,
        renderItem: (
          <Link to={item.redirectTo} key={index}>
            <div className='mobile-carousel-item'>
              <div className='mobile-carousel-image'>
                <img src={item.imageSource} alt={item.title} />
              </div>
              <div className='mobile-carousel-info'>
                <small>
                  {item.title} {icons.arrowUpRight}
                </small>
              </div>
            </div>
          </Link>
        ),
      })),
    })
    return carouselFragment as JSX.Element
  }

  const { carouselFragment, slideToNextItem, slideToPrevItem } = useSpringCarousel({
    itemsPerSlide: isMobileDevice ? 1 : 2,
    withThumbs: false,
    items: testimonials.map((item: Testimonial, index: number) => ({
      id: index + '',
      renderItem: (
        <div className='testimonial-item' key={index}>
          <h5>{item.review}</h5>
          <div className='testimonial-info'>
            <div className='author-photo'>
              {item.authorPhoto ? (
                <img src={item.authorPhoto} alt='' />
              ) : (
                <h5>
                  {item.author
                    .trim()
                    .split(' ')
                    .slice(-2)
                    .map(word => word.charAt(0))
                    .join('')
                    .toUpperCase()}
                </h5>
              )}
            </div>
            <div className='author-info'>
              <h6>{item.author}</h6>
              <small>
                {item.authorRole}
                {item.authorWorkplace ? ' at ' + item.authorWorkplace : null}
              </small>
            </div>
          </div>
        </div>
      ),
    })),
  })

  const animationConfig: { [key: number]: { delay: number; duration: number } } = {
    0: {
      delay: 100,
      duration: 170,
    },
    1: {
      delay: 0,
      duration: 190,
    },
    2: {
      delay: 50,
      duration: 220,
    },
    3: {
      delay: 20,
      duration: 140,
    },
    // 4: {
    //   delay: 0,
    //   duration: 125,
    // },
    // 5: {
    //   delay: 50,
    //   duration: 220,
    // },
  }

  const handleScroll = (targetRef: MutableRefObject<HTMLDivElement | null>) => {
    if (!targetRef || !targetRef.current) return
    setActiveIndustry(targetRef.current.id)
    const scrollOffset = -120
    const targetElement = targetRef.current
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset + scrollOffset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        bfsiRef &&
        bfsiRef.current &&
        bfsiRef.current.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setActiveIndustry('BFSI')
      }

      if (
        manufacturingRef &&
        manufacturingRef.current &&
        manufacturingRef.current.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setActiveIndustry('Manufacturing')
      }

      if (
        healthcareRef &&
        healthcareRef.current &&
        healthcareRef.current.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setActiveIndustry('Healthcare')
      }
    })
  }, [])

  // small is 504

  return (
    <div className='landing-container'>
      <section className='banner'>
        <section className='landing-top'>
          <div className='landing-top-title'>
            <h1>
              Keep Delivering More, <span className='lower-highlight'>With Passion</span>{' '}
            </h1>
            <br />

            {isMobileDevice ? (
              <Fragment>
                <p>
                  At 3MORE we develop creative roducts and provide services to solve business
                  problems
                </p>
                <br />
                <Button>Contact Us</Button>
              </Fragment>
            ) : (
              <p>
                At 3MORE we are committed to exceed the Customer satisfaction with the help of
                continues innovation, adapt to emerging technologies and provide excellent customer
                service. We develop Creative Products and provide Services to solve business
                problems
              </p>
            )}
            {/* <br />
            <p>
              At 3MORE, we work hard with passion and integrity to help you take your business to
              the next level.
            </p> */}
          </div>
          {/* <div className='landing-top-info'>
            <CheckList
              checkList={[
                'Reliable company with over 15 years of software experience',
                'Over 20 projects successfully delivered',
              ]}
            />
          </div> */}
        </section>
        {isMobileDevice ? (
          <div className='mobile-carousel'>
            <LandingCarousel />
          </div>
        ) : (
          <section className='landing-carousel'>
            <div
              className='carousel-slider'
              style={{
                transform:
                  index === 0
                    ? `translateX(${0})`
                    : `translateX(${
                        previousTransform -
                        1 * (index % 2 === 0 ? carouselHeight * 1.5 : carouselHeight * 0.75)
                      }px)`,
              }}
            >
              {landingCarouselItems.map((item: LandingCarouselItem, index: number) => {
                return (
                  <Link to={item.redirectTo} key={index}>
                    <div className='carousel-item'>
                      <div className='carousel-image'>
                        <div className='image-overlay'></div>
                        <img src={item.imageSource} alt={item.title} />
                      </div>
                      <div className='carousel-info'>
                        <small>
                          {item.title} {icons.arrowUpRight}
                        </small>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
        <div className='banner-strip'></div>
      </section>
      <section className='about-container'>
        <h5>
          <span className='grey600'>
            {!isMobileDevice ? 'In todays digital era , w' : 'W'}e enable our customers to increase
            their business value through simplification, automation and differentiation.
          </span>{' '}
          {isMobileDevice && (
            <Fragment>
              <br />
              <br />
            </Fragment>
          )}
          Our solutions help customers to improve productivity and enable them for adopting new
          trends.
        </h5>
        <section className='about-main'>
          <div className='about-art'>
            {/* <div className='about-art-item'>
              <img src={uxImage} alt='ux' />
            </div>
            <div className='about-art-item'>
              <img src={webdevImage} alt='webdev' />
            </div>

            <div className='about-art-item'></div>
            <div className='about-art-item'>
              <img src={workImage} alt='work' />
            </div>
            <div className='about-art-item'></div>
            <div className='about-art-item'>
              <img src={meetingImage} alt='planning' />
            </div> */}
            <img src={graphImage} alt='graph' />
          </div>
          <div className='about-info'>
            {/* <p>
              In Todays Digital Era , We enable our customers to increase their business value
              through the <b>Simplification</b> , <b>Automation</b> and <b>Differentiation</b>. Our
              solutions help customers to improve productivity and enable them for adopting new
              trends.
            </p>
            <br /> */}
            <h5>What do we aim for ?</h5>
            <CheckList
              checkList={[
                'Delivering more value to stakeholders',
                'Establish ourselves as a reliable and trusted partner in the industry',
                'Keep Continual focus on Quality to make profound imact on improving overall application robustness and longevity.',
              ]}
            />
          </div>
        </section>
      </section>
      <section className='digital-offerings-container'>
        <section className='digital-offerings-header'>
          <small className='tag'>DIGITAL OFFERINGS</small>
          <h2>Empowering digital potential</h2>
        </section>
        <section className='digital-offerings-listing'>
          {digitalServices.map((service: DigitalService, index: number) => {
            const firstLine: string = service.shortDescription.split('.')[0]
            const rest: string = service.shortDescription
              .replace(firstLine.replace('.', ''), '')
              .replace('.', '')
              .trim()
            return (
              <article className='digital-offering-item'>
                <h6 dangerouslySetInnerHTML={{ __html: service.title }}></h6>
                {/* <p className='first-line'>{firstLine}</p> */}
                <img src={service.image} alt={service.title} />
                <p className='rest'>{firstLine}</p>
                <Link to={service.link}>Read more</Link>
              </article>
            )
          })}
        </section>
      </section>
      <section className='business-offerings-container'>
        <section className='business-offerings-header'>
          <small className='tag'>BUSINESS OFFERINGS</small>
          <h2>Streamlined business solutions</h2>
        </section>
        <section className='business-offerings-main'>
          <div className='business-offerings-art'>
            {businessOfferingArtList.map((list: BusinessOfferingArtItem[], index: number) => {
              return (
                <div className='business-offerings-art-column' key={index}>
                  <div
                    className='business-offerings-art-slider'
                    style={{
                      animationDelay: animationConfig[index].delay + 'ms',
                      animationDuration: animationConfig[index].duration + 's',
                    }}
                  >
                    <CarouselColumn column={list.concat([...list])} n={index} />
                  </div>
                </div>
              )
            })}
            <div className='business-offerings-art-overlay'></div>
          </div>
          <div className='business-offerings-info'>
            <p>
              In an increasingly digital world, we leverage emerging yet proven technologies to
              deliver mobile and web applications on-premise as well as on cloud.
            </p>
            <br />
            <h6>We follow the mantra of</h6>
            <CheckList
              checkList={[
                'Right mix of skilled engineers',
                'Cutting edge technologies and domain',
                'Effective methodologies and tools',
              ]}
            />
            <br />
            {!isMobileDevice && (
              <Link to='#success-stories' className='link-border'>
                <div className='tag'>About</div> Learn more about how we operate{' '}
                {icons.arrowRightLong}
              </Link>
            )}
          </div>
        </section>
        <section className='business-offerings-details'>
          {/* <h3>Comprehensive business offerings</h3> */}
          {/* <p className='business-offerings-description'>
            Explore our business offerings. For any other requirements, you can{' '}
            <Link to='#'>contact us</Link>
          </p> */}

          <br />
          <h5 className='highlight'>Engineering and Development</h5>
          <section className='business-services-grid'>
            {businessServices
              .filter((service: BusinessService) => service.category === 'Engineering')
              .map((service: BusinessService, index: number) => {
                return (
                  <article key={index} className='business-services-item'>
                    <div className='business-serives-item-main'>
                      <div className='business-services-item-icon'>{service.icon}</div>
                      <div className='business-services-info'>
                        <h6>
                          {service.title} {isMobileDevice && <span>{icons.arrowUpRight}</span>}
                        </h6>
                        {!isMobileDevice && <p>{service.shortDescription}</p>}
                      </div>
                    </div>
                    {!isMobileDevice && <Link to={service.link}>Read more</Link>}
                  </article>
                )
              })}
          </section>
          <br />
          <h5 className='highlight'>Testing and Security</h5>
          <section className='business-services-grid'>
            {businessServices
              .filter((service: BusinessService) => service.category === 'Testing')
              .map((service: BusinessService, index: number) => {
                return (
                  <article key={index} className='business-services-item'>
                    <div className='business-serives-item-main'>
                      <div className='business-services-item-icon'>{service.icon}</div>
                      <div className='business-services-info'>
                        <h6>
                          {service.title} {isMobileDevice && <span>{icons.arrowUpRight}</span>}
                        </h6>
                        {!isMobileDevice && <p>{service.shortDescription}</p>}
                      </div>
                    </div>
                    {!isMobileDevice && <Link to={service.link}>Read more</Link>}
                  </article>
                )
              })}
          </section>
          <br />
          <h5 className='highlight'>Consulting and Staffing</h5>
          <section className='business-services-grid'>
            {businessServices
              .filter((service: BusinessService) => service.category === 'People')
              .map((service: BusinessService, index: number) => {
                return (
                  <article key={index} className='business-services-item'>
                    <div className='business-serives-item-main'>
                      <div className='business-services-item-icon'>{service.icon}</div>
                      <div className='business-services-info'>
                        <h6>
                          {service.title} {isMobileDevice && <span>{icons.arrowUpRight}</span>}
                        </h6>
                        {!isMobileDevice && <p>{service.shortDescription}</p>}
                      </div>
                    </div>
                    {!isMobileDevice && <Link to={service.link}>Read more</Link>}
                  </article>
                )
              })}
          </section>
        </section>
      </section>
      <section id='industries' className='industries-container'>
        <small className='tag'>Industries</small>
        <h2>Services that span industries</h2>

        <section className='industries-float-container'>
          <section className='industries-float'>
            <div className='industries-menu'>
              <Link
                to='#industry-bfsi'
                className={`${activeIndustry === 'BFSI' && 'active'}`}
                onClick={() => handleScroll(bfsiRef)}
              >
                Banking, Finance & Insurance
              </Link>
              <Link
                to='#industry-manuf'
                className={`${activeIndustry === 'Manufacturing' && 'active'}`}
                onClick={() => handleScroll(manufacturingRef)}
              >
                Manufacturing
              </Link>
              <Link
                to='#industry-health'
                className={`${activeIndustry === 'Healthcare' && 'active'}`}
                onClick={() => handleScroll(healthcareRef)}
              >
                Healthcare
              </Link>
            </div>
          </section>
        </section>
        <section className='industry-container' id='BFSI' ref={bfsiRef}>
          <div className='bfsi-info'>
            <br />
            <h5>Our Contribution in the BFSI sector</h5>
            <br />
            <i>
              {' '}
              <h6>Our focus - </h6>
            </i>
            <List
              list={[
                'Digitize banking operations',
                'Improve customer experience',
                'Support ongoing modernization programs',
              ]}
            />
            <br />
            <i>
              {' '}
              <h6>For Financial institutions - </h6>
            </i>
            <List
              list={[
                'We help you to reinvent yout workflows and operations based on data-driven insights',
                'We offer customized solutions',
              ]}
            />
            <p>
              The biggest challenge is to make the transition from traditional to digitized
              banking/financial services while meeting the heightened compliance measures and
              staying cost-efficient. We actively work with our BFSI Clients to hanlde this
              challange successfully
            </p>
            <br />
            <Link to='#' className='link-border'>
              <div className='tag'>Explore</div> See more case studies {icons.arrowRightLong}
            </Link>
          </div>

          <div className='finaqua-container'>
            <div className='finaqua-video-container'>
              <img src={finaQAImage} alt='finaQA' />
              <Link to='https://www.youtube.com/watch?v=qdWhB-oWCIk' target='_blank'>
                <div className='finaqua-video-play'>
                  <div className='finaqua-video-play-button'>
                    {icons.play} <p> Play video</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='finaqua-info'>
              <h5>
                <span className='underline'>FinaQA</span> - a case study
              </h5>
              <small>developed by 3MORE</small>
              <br />
              <br />
              <CheckList
                checkList={[
                  'Provide Unbiased Advice to suit financial needs of Retail as well as institutional investors',
                  'Provide Premium services for High Net Worth & NRIs',
                  'Provide Mobile based User interface',
                ]}
              />
              <Link to='http://www.finaqa.com/' target='_blank'>
                Read more {icons.arrowUpRight}
              </Link>
            </div>
          </div>
        </section>
        <section className='industry-container' id='Manufacturing' ref={manufacturingRef}>
          <br />
          <h5>Enhancing productivity with Factory Automation</h5>
          <p>
            <List
              list={`With our extensive expertise and years of experience in the manufacturing domain, We
            supports global clients by automating their operations that effectively address all
            their challenges and provide them with a competitive edge. Manufacturing industry is
            manual operation-intensive industry and looking for support in the automation of their
            operations to improve delivery cycles, improve Quality, minimize the operations risk and
            reduce the overall cost. We have tailormade solution to to handle key manufacturing
            functions including Floor automation, Safety, Quality, Production, AndOn and Management
            reporting.`
                .split('.')
                .slice(0, -1)
                .map(sentence => sentence.trim())}
            />
          </p>
        </section>
        <section className='industry-container' ref={healthcareRef}>
          <br />
          <h5>Technological advancement to improve health of society</h5>
          <p>
            Our Healthcare service focus is help Client develp and maintain Telemedicine Apps,
            OPD/IPD patient portals, Health platforms for Doctors and related eco system. Our
            medical Products/Apps are being leveraged by healthcare professional to improve the
            overall diagnosis, digitize the medical record and provide Quick , Quality and Cost
            effective service.
          </p>
        </section>
      </section>
      <img src={pictureGallery} alt='picture-gallery' id='Healthcare' className='picture-gallery' />
      <section className='success-stories-container'>
        <section className='success-stories-header'>
          <small className='tag'>Success stories</small>
          <h2>Hear it from our clients</h2>
          {!isMobileDevice && (
            <div className='success-stories-arrows'>
              <Button variant='secondary' onClick={slideToPrevItem}>
                {icons.arrowLeftLong}
              </Button>
              <Button variant='secondary' onClick={slideToNextItem}>
                {icons.arrowRightLong}
              </Button>
            </div>
          )}
        </section>
        <section className='reviews-slider'>
          {carouselFragment}
          {isMobileDevice && (
            <div className='success-stories-arrows'>
              <Button variant='secondary' onClick={slideToPrevItem}>
                {icons.arrowLeftLong}
              </Button>
              <Button variant='secondary' onClick={slideToNextItem}>
                {icons.arrowRightLong}
              </Button>
            </div>
          )}
        </section>
      </section>
    </div>
  )
}

export default Landing
