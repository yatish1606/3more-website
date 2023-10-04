import finaqaImage from '../assets/images/finaqa.svg'
import ptwikki from '../assets/images/ptwikki.svg'
import ptwikki2 from '../assets/images/ptwikki-landing.svg'

import hrwikkiVideo from '../assets/videos/hrwikki_video.mp4'
import hrwikki from '../assets/images/hrwikki.svg'

import rtt1 from '../assets/images/rtt1.svg'
import rtt2 from '../assets/images/rtt2.svg'

import ent1 from '../assets/images/ent1.svg'
import ent2 from '../assets/images/ent2.svg'

import finaqa from '../assets/images/finaqa.svg'

import ptwikkiBrochure from '../assets/case-study-brochures/ptwikki.pdf'
import hrmsBrochure from '../assets/case-study-brochures/hrms.pdf'
import rttBrochure from '../assets/case-study-brochures/rtt.pdf'
import entBrochure from '../assets/case-study-brochures/ent.pdf'
import uopeopleBrochure from '../assets/case-study-brochures/uopeople.pdf'
import yanfengBrochure from '../assets/case-study-brochures/mes.pdf'
import finaqaBrochure from '../assets/case-study-brochures/finaqa.pdf'

interface Project {
  title: string
  about: string
  keyFunctionality?: string[]
  images: string[]
  marketingTitle: string
  downloadLink: string
  [key: string]: any
}

export type { Project }

const projects: Project[] = [
  {
    title: 'Healthcare Management Platform',
    objective: [
      'To Build platform which helps Patients, Physiotherapist and  related centers to manage overall lifecycle from Enquiry to Appointment.',
      'To improve experience of Patients and Executives',
    ],
    about: 'Platform is a multichannel platform with overall Lead management capability ',
    keyFunctionality: [
      'Generate Lead through seamless integration with Social Media',
      'Registration of Patient',
      'Online Appointment by Patient',
      'Assign Physiotherapist to the Patient',
      'Overall Lead management – New Lead, Hot Lead, Appointment Booking – Confirmation',
      'Integration with CRM/EMR systems',
    ],
    downloadLink: ptwikkiBrochure,
    marketingTitle: 'An all-round patient management platform',
    images: [],
  },
  {
    title: 'Human Resource Management System',
    objective: [
      'To Build HRMS platform which helps HR professionals manage the modern workforce',
      'Design Platform to integrates, manages, and automates many of the HR processes',
    ],
    about: 'HRMS platform provides simple, user-friendly , intuitive and responsive UI.',
    keyFunctionality: [
      'Master Data setup at Company level',
      'Registration of Candidate',
      'End to end On-Boarding of Candidate including Online Document collection and signing',
      'Assign Client to the employee',
      'Manage Compensation/Leave',
      'Dashboard for Sr. Management, HR executive and Employee',
    ],
    downloadLink: hrmsBrochure,
    marketingTitle: 'Flexible and efficient HR Management System',
    images: [],
  },
  {
    title: 'Online Table Booking',
    objective: [
      'To Build platform which helps Restaurant to manage real time table booking effectively',
      'Allows Customer to do online table booking with few Taps using Phone',
    ],
    about: 'Platform automates the key operations of Restaurant',
    keyFunctionality: [
      'Registration of Customer',
      'Self Booking, Call & Book Table',
      'Table Management',
      'Booking/Capacity Management',
      'Promotions/Discount handling',
      'Communication',
      'Dashboard/Reports and Analytics',
      'Master Data Management',
      'Social Site Integration',
    ],
    images: [rtt1, rtt2],
    downloadLink: rttBrochure,
    marketingTitle: 'Convenient system for table booking',
  },
  {
    title: 'FinaQA',
    objective: [
      'To Build platform which helps Restaurant to manage real time table booking effectively',
      'Allows Customer to do online table booking with few Taps using Phone',
    ],
    about:
      'Financial Advisor Platform is a unique platform which connects investors with expert financial professionals to resolve financial concerns.',
    keyFunctionality: [
      'Onboarding of investors & Financial experts',
      'Facility to submit Questions',
      'Adhar card and PAN card based KYC',
      'Digital signature on LoE between investor and consultant',
      'Online Payment (RazorPay)',
    ],
    images: [finaqa],
    downloadLink: finaqaBrochure,
    marketingTitle: 'Finance simplified through mobile based platform',
  },
  {
    title: 'Telemedicine Platform',
    about:
      'A unique platform which connects Patients with ENT expert to resolve ENT related health concerns.',
    keyFunctionality: [
      'Onboarding of Doctors/Practitioners & ENT Specialist',
      'Facility to Capture Patient Consult details using standard templates',
      'End to end treatment using Mobile App',
      'Special training and certification module for Practitioner and coordinators',
      'Online Payment (RazorPay)',
    ],
    images: [ent1, ent2],
    downloadLink: entBrochure,
    marketingTitle: 'ENT Telemedicine platform',
  },
  {
    title: ' ',
    objective: [
      'Perform strategic review of IT systems and IT Processes in order to support the future business growth',
      'Provide recommendations and high level implementation roadmap to meet future growth plan in terms of availability, scalability and performance.',
    ],
    images: [],
    about:
      'Strategic review for the first non-profit, tuition-free, American, accredited, online university.',
    keyFunctionality: [
      'Re-engineer existing Application landscape',
      'Suggested organization structural changes',
      'Standardization of Processes & Resource optimization',
      'Productivity improvements, ROI: Higher return on Investment',
      'Improved Time to Market, Optimal Infrastructure',
    ],
    downloadLink: uopeopleBrochure,
    marketingTitle: 'Portfolio assessment',
  },
  {
    title: 'MES',
    images: [],
    about:
      'Client is a global leader in automotive interiors having approximately 110 manufacturing plants and technical centers in 20 countries. ',
    keyFunctionality: [
      'Developed Web based application with Layered Architecture',
      'Use of Open source for developing the functionality',
      'The proposed solution will be used by Operator, Cell Leader, Supervisor , Functional  head, Quality inspector and Plant manager.',
      'The overall delivery was done using Agile methodology',
      'Our Modular design approach ensured the data collection at most granular level and reporting  at any level.',
      'We developed REST API calls for specific/third party services',
    ],
    downloadLink: yanfengBrochure,
    marketingTitle: 'Manufacting Excellence System',
  },
]

export default projects
