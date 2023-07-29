import demoImage from '../assets/images/demo.jpg'
import eCommerce from '../assets/images/e-commerce.jpg'
import cloudMigration from '../assets/images/cloud-migration.jpg'
import mobileDevelopment from '../assets/images/mobile-development.jpg'

interface DigitalService {
  title: string
  shortDescription: string
  longDescription: string
  image: string
  link: string
}

const digitalServices: Array<DigitalService> = [
  {
    title: `<span className="highlight">Cloud Migration</span> offerings to simplify and streamline cloud transitions`,
    shortDescription: `We leverage set of tools designed to facilitate a smooth and efficient migration to the cloud & seamless cloud transition. We assist you in transitioning your existing IT infrastructure, applications, data, and processes from on-premises environments to the cloud. `,
    longDescription: `Through our Cloud migration offerings we assist our Clients in transitioning their existing IT infrastructure, applications, data, and processes from on-premises environments to the cloud. We leverage set of tools designed to facilitate a smooth and efficient migration to the cloud. Offering focus is to enable clients to leverage the benefits of cloud computing, such as scalability, agility, cost savings, and enhanced collaboration. Our end to end offering includes Primary Assessment/AS IS analysis, Architecture and Design, Migration (Data + App) , Testing and incremental Rollout phase.`,
    image: cloudMigration,
    link: '#cloud-migration',
    // <a href="https://www.freepik.com/free-ai-image/glowing-blue-office-desk-with-modern-technology-generated-by-ai_41570050.htm#page=2&query=cloud%20computing&position=23&from_view=search&track=ais">Image By vecstock</a>
  },
  {
    title: 'Building <span className="highlight">E-Commerce Platform</span> for your business',
    shortDescription: ` We deliver online platforms that enable businesses to sell products or services over
        the web as well as mobile channels.  We enable businesses to operate and interact with customers, allowing for convenient
        and efficient transactions`,
    longDescription: `Under our e-commerce/m-commerce service, we deliver online platforms that enable businesses to sell products or services over the web as well as mobile channels. These services enables businesses to operate and interact with customers, allowing for convenient and efficient transactions without the need for physical presence or face-to-face interactions. This service also includes interface with Payment gateways to facilitate secure online transactions by allowing customers to make payments using various methods. Our offering also includes digital contract interface that helps organizations increased contract speed, enhanced security, and lower transaction cost.`,
    image: eCommerce,
    link: '#e-commerce-platform',
    //<a href="https://www.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1202191.htm#query=e%20commerce%20software&position=31&from_view=search&track=ais">Image by snowing</a> on Freepik
  },

  {
    title:
      'Reach all devices and platforms with our <span className="highlight">Mobile App Development</span> services',
    shortDescription: ` We follow a cross platform development framework which allows us to build apps for both Andoid and iOS. We create a single codebase that can be deployed on all platforms`,
    longDescription: `Our Mobility service include delivering mobile applications on Android as well as iOS platform. Our Cross platform development approach enables our clients to create a single codebase that can be deployed on multiple platforms, reducing development time and costs. This is achieved using various frameworks. We follow the Client/Industry standard guidelines to design user-friendly ,visually appealing UI to improve overall user experience.`,
    image: mobileDevelopment,
    link: '#mobile-app-development',
    // <a href="https://www.freepik.com/free-ai-image/mobile-device-controls-car-with-wireless-technology-generated-by-ai_41668135.htm#page=2&query=mobile%20app&position=12&from_view=search&track=ais_ai_generated">Image By vecstock</a>
  },
]

export default digitalServices
export type { DigitalService }
