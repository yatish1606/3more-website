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
    title: 'ECommerce Platform',
    imageSource: eCommerce,
    redirectTo: '/offerings',
  },

  {
    title: 'Web & Mobile App Development',
    imageSource: mobileDevelopment,
    redirectTo: '/offerings',
  },
  {
    title: 'Portflio Consulting',
    imageSource: meetingImage,
    redirectTo: '/offerings',
  },
  {
    title: 'Staffing Services',
    imageSource: consultationImage,
    redirectTo: '/offerings',
  },
  {
    title: 'Application Testing',
    imageSource: webdevImage,
    redirectTo: '/offerings',
  },
  {
    title: 'Cloud Migration',
    imageSource: cloudMigration,
    redirectTo: '/offerings',
  },
  {
    title: 'Product Engineering',
    imageSource: planningImage,
    redirectTo: '/offerings',
  },
]
