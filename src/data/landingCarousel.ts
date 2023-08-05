import eCommerce from '../assets/images/e-commerce.jpg'
import cloudMigration from '../assets/images/cloud-migration.jpg'
import mobileDevelopment from '../assets/images/mobile-development.jpg'
import planningImage from '../assets/images/planning.jpg'
import meetingImage from '../assets/images/meeting.jpg'
import webdevImage from '../assets/images/webdev.jpg'
import uxImage from '../assets/images/ux.jpg'
import consultationImage from '../assets/images/consultation.jpg'
import finaqaImage from '../assets/images/finaqa.svg'
import ptwikki from '../assets/images/ptwikki-landing.svg'
import hrwikkiVideo from '../assets/videos/hrwikki_video.mp4'
import consultingVideo from '../assets/videos/consulting_video.mp4'
import staffingVideo from '../assets/videos/staffing_video.mp4'
import { isMobile } from '../utils'

export { landingCarouselItems, landingCarouselItemsMobile }
export type { LandingCarouselItem }

interface LandingCarouselItem {
  title: string
  imageSource?: string
  redirectTo: string
  videoSource?: string
}

const landingCarouselItems: Array<LandingCarouselItem> = [
  {
    title: 'ECommerce Platform',
    imageSource: finaqaImage,
    redirectTo: '/offerings#e-commerce-platform',
  },
  {
    title: 'Web & Mobile App Development',
    videoSource: hrwikkiVideo,
    redirectTo: '/offerings#webapp-development',
  },
  {
    title: 'Portflio Consulting',
    videoSource: consultingVideo,
    redirectTo: '/offerings#portfolio-consulting',
  },
  {
    title: 'Application Testing',
    imageSource: ptwikki,
    redirectTo: '/offerings',
  },
  {
    title: 'Staffing Services',
    videoSource: staffingVideo,
    redirectTo: '/offerings#staffing',
  },

  {
    title: 'Cloud Migration',
    videoSource: hrwikkiVideo,
    redirectTo: '/offerings',
  },
  {
    title: 'Product Engineering',
    videoSource: consultingVideo,
    redirectTo: '/offerings',
  },
]

const landingCarouselItemsMobile: Array<LandingCarouselItem> = [
  {
    title: 'Web & Mobile App Development',
    videoSource: hrwikkiVideo,
    redirectTo: '/offerings#webapp-development',
  },
  {
    title: 'Portflio Consulting',
    videoSource: consultingVideo,
    redirectTo: '/offerings#portfolio-consulting',
  },
  {
    title: 'ECommerce Platform',
    imageSource: finaqaImage,
    redirectTo: '/offerings#e-commerce-platform',
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
