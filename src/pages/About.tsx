import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../ui/icons'
import { founders, techStack } from '../data/about'
import team1 from '../assets/images/team1.jpeg'
import team2 from '../assets/images/team2.jpeg'
import team3 from '../assets/images/team3.jpeg'

const About = () => {
  return (
    <div className='about-container'>
      <h1>About Us</h1>
      <br />
      <br />
      <p>
        3MORE Technologies is committed to deliver business value by providing technology solutions
        to meet customer’s business requirements and to resolve business challenges.
        <br /> <br />
        We believe that transparency, honesty, sincerity, integrity are fundamentals to build
        customer trust and committed quality delivery is significant to ensure customer delight. Our
        team of experts comprises of experienced founders, visionary architects, smart managers,
        sincere engineers and meticulous quality advisors who are passionate to adopt right
        technology to drive positive change.
      </p>

      <div className='tech-stack-container'>
        <br />
        <h3>Meet our Leadership Team</h3>
        <br />
        <div className='founders-grid'>
          {founders.map(founder => {
            return (
              <div className='founder-box'>
                <img src={founder.photo} />

                <h5>{founder.name}</h5>

                <p>{founder.role}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='tech-stack-container'>
        <br />
        <h3>The Team</h3>
        <br />
        <p>
          At our startup, we pride ourselves on cultivating a vibrant team that radiates with a
          relentless tech focus and boundless energy. Our dynamic group of individuals is driven by
          a shared passion for innovation and a commitment to delivering more value. We believe that
          energy, paired with a strong tech-centric mindset, is the catalyst for our success.
          Together, we embark on a journey to not only meet but exceed expectations, harnessing the
          power of innovation to shape a brighter future for our company and the industries we
          touch. Join our spirited team, and together, let's turn visions into accomplishments.
        </p>
        <div className='team-grid'>
          <img src={team2} alt='team-lunch' />
          <img src={team1} alt='team-lunch' />
          <img src={team3} alt='team-lunch' />
        </div>
      </div>

      <div className='tech-stack-container'>
        <br />
        <h3>Our tech stack</h3>
        <br />
        <p>
          At our forward-thinking company , we are passionate advocates for various technology
          stacks and open to add new technologies to our portfolio. Our commitment to research and
          development means we are always on the lookout for newer technologies and trends. Early
          adoption is in our culture, and we're not content with simply following industry
          standards. By continually exploring the cutting edge and adopting emerging trends, we
          ensure our startup remains at the forefront of technological progress, enabling us to
          offer the most innovative and impactful solutions to our clients and partners.
        </p>
        <br />
        {Object.keys(techStack).map(item => {
          let list = techStack[item]
          return (
            <div className='tech-stack-item'>
              <div className='tech-stack-item-name'>
                <h6>{item}</h6>
              </div>
              <div className='tech-stack-list'>{list.map(tech => tech)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
