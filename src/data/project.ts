import icons from '../ui/icons'

interface Project {
  title: string
  client?: {
    clientName: string
    clientLogo: string
    clientInfo: string
  }
  objective: string[]
  techStack?: JSX.Element[]
  about: string
  keyFunctionality?: string[]
  achievements?: string[]
  images: string[]
  marketingTitle: string
  [key: string]: any
}

export type { Project }

const projects: Project[] = [
  {
    title: 'PTWikki',
    client: {
      clientName: 'Itilize',
      clientInfo: `Client is multinational organization based out of US with the focus to build a platform that would integrate business and Technology seamlessly. `,
      clientLogo: '',
    },
    objective: [
      'To Build platform which helps Patients, Physiotherapist and  related centers to manage overall lifecycle from Enquiry to Appointment.',
      'To improve experience of Patients and Executives',
    ],
    techStack: [
      icons.html,
      icons.javascript,
      icons.angular,
      icons.mui,
      icons.springBoot,
      icons.mongodb,
    ],
    about: 'PTWiki platform is a multichannel platform with overall Lead management capability ',
    keyFunctionality: [
      'Generate Lead through seamless integration with Social Media',
      'Registration of Patient',
      'Online Appointment by Patient',
      'Assign Physiotherapist to the Patient',
      'Overall Lead management – New Lead, Hot Lead, Appointment Booking – Confirmation',
      'Integration with CRM/EMR systems',
    ],
    achievements: ['Increase in enrollment of physio therapy Patients'],
    images: ['', ''],
    marketingTitle: 'An all-round patient management platform',
  },
]

export default projects
