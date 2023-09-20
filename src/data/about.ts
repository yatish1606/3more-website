import icons from '../ui/icons'

import shyamWagle from '../assets/images/shyam_wagle.jpg'
import manishDeshpande from '../assets/images/manish_deshpande.jpg'
import prashantPawar from '../assets/images/prashant_pawar.JPG'

const techStack: { [key: string]: any[] } = {
  'UI & Presentation': [icons.angular, icons.html, icons.javascript, icons.typescript],
  Frameworks: [icons.spring, icons.springBoot, icons.graphql, icons.ionic],
  Database: [icons.mysql, icons.mongodb, icons.postgresql],
  'Business Logic / Rules': [icons.nodejs, icons.perl, icons.php, icons.java],
  DevOps: [icons.git, icons.github, icons.jira, icons.jenkins],
}

const founders = [
  {
    name: 'Ghanashyam (Shyam) Wagle',
    photo: shyamWagle,
    role: 'Founder and CEO',
  },
  {
    name: 'Manish Deshpande',
    photo: manishDeshpande,
    role: 'Founder and COO',
  },
  {
    name: 'Prashant Pawar',
    photo: prashantPawar,
    role: 'Partner and Service Delivery Head',
  },
]

export { techStack, founders }
