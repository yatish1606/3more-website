import mobileDevelopment from '../assets/images/mobile-development.jpg'
import { DigitalService } from './digitalServices'
import ptwikki from '../assets/images/ptwikki.svg'
import icons from '../ui/icons'
import consultationImage from '../assets/images/consultation.jpg'
import ptwikki2 from '../assets/images/ptwikki-landing.svg'
import ntt from '../assets/images/ntt.svg'
import mobileDev from '../assets/images/mobile-dev.svg'
import cybersecurity from '../assets/images/cybersecurity.svg'
import hrwikki from '../assets/images/hrwikki.svg'
import technologyConsulting from '../assets/images/technology_consulting.jpg'
import portfolioConsulting from '../assets/images/portfolio_consulting.jpg'

interface BusinessService extends DigitalService {
  title: string
  shortDescription: string
  longDescription: string
  image: string
  link: string
  icon: JSX.Element
  category: 'Engineering' | 'Testing' | 'People'
  label: string
  weCanHelpYouWith: string
  projectInfo?: {
    link: string
    title: string
  }
}

const businessServices: Array<BusinessService> = [
  {
    title: 'Webapp Development',
    shortDescription: `Tailored mobile and web apps for your business needs, from design to ongoing support & complete app development lifecycle`,
    longDescription: `We create, design and build mobile and web applications tailored to meet the specific needs of a business. These services encompass the entire app development lifecycle, from conceptualization, design to coding, testing, deployment and ongoing maintenance and support. We work closely with business to understand their business requirements, convert them to technical specifications and leverage latest technology/tools/frameworks/methods to develop clean and efficient code, ensuring scalability and performance.`,
    image: ptwikki,
    link: '#webapp-development',
    icon: icons.code,
    category: 'Engineering',
    label: 'Web based applications',
    weCanHelpYouWith: 'Creating custom web software',
    projectInfo: {
      title: 'Healthcare Management Platform',
      link: '/portfolio#healthcaremgmt',
    },
    // <a href="https://www.freepik.com/free-ai-image/glowing-blue-office-desk-with-modern-technology-generated-by-ai_41570050.htm#page=2&query=cloud%20computing&position=23&from_view=search&track=ais">Image By vecstock</a>
  },
  {
    title: 'Mobile Application Development',
    shortDescription: `Developing custom software applications, mobile apps, or web-based solutions tailored to meet the specific needs of clients`,
    longDescription: `We create, design and build mobile and web applications tailored to meet the specific needs of a business. These services encompass the entire app development lifecycle, from conceptualization, design to coding, testing, deployment and ongoing maintenance and support. We work closely with business to understand their business requirements, convert them to technical specifications and leverage latest technology/tools/frameworks/methods to develop clean and efficient code, ensuring scalability and performance.`,
    image: mobileDev,
    link: '#mobile-development',
    icon: icons.mobile,
    category: 'Engineering',
    label: 'Web based applications',
    weCanHelpYouWith: 'Developing mobile apps',
    projectInfo: {
      title: 'FinaQA',
      link: '/portfolio#finaqa',
    },
    // <a href="https://www.freepik.com/free-ai-image/glowing-blue-office-desk-with-modern-technology-generated-by-ai_41570050.htm#page=2&query=cloud%20computing&position=23&from_view=search&track=ais">Image By vecstock</a>
  },
  {
    title: 'Application Maintainence',
    shortDescription: `We make sure your software runs smoothly, receives timely updates, and gets technical support to stay optimized and free from bugs`,
    longDescription: `Application maintenance service offers ongoing enhancements & management activities necessary to ensure the smooth functioning, keep applications updated to match customer expectations and optimization of their mobile or web applications. These services help maintain the app's performance, address any issues or bugs, implement updates and enhancements and provide overall technical support (level 2 & 3) with appropriate, agreed SLAs.`,
    image: ntt,
    link: '#application-maintainence',
    icon: icons.maintainence,
    category: 'Engineering',
    label: 'Web based applications',
    weCanHelpYouWith: 'Maintain your software',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Product Engineering',
    shortDescription: `We help clients create, build, and take care of software products, assist in setting product goals & finding target customers`,
    longDescription: `Our Product engineering offerings help clients design, develop, and maintain their software products. We help client define their product vision, identify target markets, and devise a roadmap for product development. Our product engineering team assist clients in gathering and analysing requirements for their software products. This involves working closely with stakeholders to understand their needs, documenting requirements, and translating them into technical specifications using Agile Development.`,
    image: hrwikki,
    link: '#product-engineering',
    icon: icons.cube,
    category: 'Engineering',
    label: 'Web based applications',
    weCanHelpYouWith: 'Engineer your products',
    projectInfo: {
      title: 'HR Management System',
      link: '/portfolio#hrms',
    },
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Application Testing',
    shortDescription: `We ensure your applications work as intended through manual & automation testing, offering extensive coverage and efficiency`,
    longDescription: `Our Manual as well as Automation Testing services help client verifying the application's behaviour against expected results. It's worth noting that while automation testing can significantly improve efficiency and test coverage, manual testing still plays a crucial role in exploratory testing, usability testing, and scenarios that require human judgment. A combination of manual and automation testing services can provide comprehensive test coverage for application. Our team suggests & use appropriate automation tools and frameworks based on the technology stack and project needs of client.`,
    image: ptwikki2,
    link: '#application-testing',
    icon: icons.bug,
    category: 'Testing',
    label: 'Web based applications',
    weCanHelpYouWith: 'Test your applications',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Performance Testing',
    shortDescription: `Through various tools and techniques, we perform Load, Stress, Endurance, and scalability testing to thoroughly and accurately assess your application`,
    longDescription: `Performance testing offering covers comprehensive and accurate evaluations of Client systems to meet system's performance under expected and peak loads. Under this offering, Our team uses various tools/techniques to cover Load testing, Stress testing, Endurance and scalability testing.`,
    image: mobileDevelopment,
    link: '#performance-testing',
    icon: icons.chart,
    category: 'Testing',
    label: 'Web based applications',
    weCanHelpYouWith: 'Assess software performance',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Cybersecurity (Alliance)',
    shortDescription: `We provide tailored solutions to tackle digital challenges and threats, by leveraging Vulnerability Assessment, Penetration Testing, Security Analytics and Monitoring, and Cloud security`,
    longDescription: `With our Alliance partner, we offer solutions to address the growing challenges and threats in the digital world. We have end to end application security solution to match Client needs. The key focus area includes Vulnerability Assessment , Penetration Testing:, Security Analytics and Monitoring and Cloud security. With a team of elite ethical hackers, We brings an offensive security mindset and provide complete solution for securing client's Digital Asset.`,
    image: cybersecurity,
    link: '#cybersecurity',
    icon: icons.shield,
    category: 'Testing',
    label: 'Web based applications',
    weCanHelpYouWith: 'Help secure your software',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Technology Consulting',
    shortDescription: `We specialize in creating and implementing IT strategies that drive business growth`,
    longDescription: `Define, design and execute IT strategies that drive business growth. We define Standard Operating Environment (SOE), Reference architecture and related implementation using suitable proven technologies. Using a holistic approach, we help clients with application as well infrastructure assessment of application portfolio.`,
    image: technologyConsulting,
    link: '#technology-consulting',
    icon: icons.terminal,
    category: 'People',
    label: 'Web based applications',
    weCanHelpYouWith: 'Consult on technology',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Portfolio Consulting',
    shortDescription: `We help customers establish effective Portfolio Program Management functions aligned with industry best practices`,
    longDescription: `We help our customers to establish Portfolio Program Management functions aligned with industry best Practices. 3MORE Consultant work closely with key stakeholders, Analyze existing functions, understanding the finer points of planning, Metrics, data and processes, Identify GAPS and provide recommendations and implement the same, covering key focus areas like Process, Tools Technology and People. 3MORE Consulting team has strong experience in managing many End-End complex Portfolio product releases orchestrating all release activities and managing deliveries of cross products and 3rd party vendors.`,
    image: portfolioConsulting,
    link: '#portfolio-consulting',
    icon: icons.thumbsUp,
    category: 'People',
    label: 'Web based applications',
    weCanHelpYouWith: 'Consult on your Portfolio',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
  {
    title: 'Staffing Services',
    shortDescription: `We focus on recruiting skilled individuals who align with your company's hiring needs, fostering growth and success`,
    longDescription: `Our staffing offering involves hiring talented individuals with the necessary skills and experience to match your company's hiring requirements and contribute to your company's growth and success. As per your need we can hire Software developers, Lead developer, designers, project managers, Test analyst (Manual & Automation expert) and other relevant roles based across various technologies.`,
    image: consultationImage,
    link: '#staffing',
    icon: icons.users,
    category: 'People',
    label: 'Web based applications',
    weCanHelpYouWith: 'Recruit resources for you',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
]

export default businessServices
export type { BusinessService }
