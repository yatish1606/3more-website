import eCommerce from '../assets/images/e-commerce.jpg'
import cloudMigration from '../assets/images/cloud-migration.jpg'
import mobileDevelopment from '../assets/images/mobile-development.jpg'
import planningImage from '../assets/images/planning.jpg'
import meetingImage from '../assets/images/meeting.jpg'
import webdevImage from '../assets/images/webdev.jpg'
import uxImage from '../assets/images/ux.jpg'
import consultationImage from '../assets/images/consultation.jpg'

export { landingCarouselItems }
export type { LandingCarouselItem }

interface LandingCarouselItem {
  title: string
  imageSource: string
  redirectTo: string
}

const landingCarouselItems: Array<LandingCarouselItem> = [
  {
    title: 'Web & Mobile App Development',
    imageSource: mobileDevelopment,
    redirectTo: '#business-services',
  },
  {
    title: 'Portflio Consulting',
    imageSource: meetingImage,
    redirectTo: '#business-services',
  },
  {
    title: 'ECommerce Platform',
    imageSource: eCommerce,
    redirectTo: '#digital-services',
  },
  {
    title: 'Staffing Services',
    imageSource: consultationImage,
    redirectTo: '#business-services',
  },
  {
    title: 'Application Testing',
    imageSource: webdevImage,
    redirectTo: '#business-services',
  },
  {
    title: 'Cloud Migration',
    imageSource: cloudMigration,
    redirectTo: '#business-services',
  },
  {
    title: 'Product Engineering',
    imageSource: planningImage,
    redirectTo: '#business-services',
  },
]
