import icons from '../ui/icons'
import demoImage from '../assets/images/demo.jpg'

import mobileDevelopment from '../assets/images/mobile-development.jpg'
import planningImage from '../assets/images/planning.jpg'
import meetingImage from '../assets/images/meeting.jpg'
import webdevImage from '../assets/images/webdev.jpg'
import uxImage from '../assets/images/ux.jpg'
import consultationImage from '../assets/images/consultation.jpg'
export type { BusinessOfferingArtItem }
interface BusinessOfferingArtItem {
  backgroundColor?: string
  icon?: JSX.Element
  image?: string
}

const businessOfferingArtList: Array<Array<BusinessOfferingArtItem>> = [
  [
    {
      icon: icons.download,
      backgroundColor: '#de5207fe',
    },
    {
      icon: icons.code,
    },
    {
      icon: icons.testing,
      backgroundColor: '#008080de',
    },
    {
      icon: icons.terminal,
    },
    {
      icon: icons.database,
      backgroundColor: '#2468a7',
    },
    {
      icon: icons.cube,
    },
    {
      icon: icons.chart,
      backgroundColor: '#008080de',
    },
  ],
  [
    {
      icon: icons.bug,
      backgroundColor: '#2468a7',
    },
    {
      icon: icons.database,
    },
    {
      icon: icons.testing,
      backgroundColor: '#b9aa90',
    },
    {
      icon: icons.check,
    },
    {
      icon: icons.play,
      backgroundColor: '#008080de',
    },
    {
      icon: icons.thumbsUp,
    },
    {
      icon: icons.chart,
      backgroundColor: '#2468a7',
    },
  ],
  [
    {
      icon: icons.testing,
      backgroundColor: '#008080de',
    },
    {
      icon: icons.code,
    },
    {
      icon: icons.maintainence,
      backgroundColor: '#de5207fe',
    },
    {
      icon: icons.shield,
    },
    {
      icon: icons.chart,
      backgroundColor: '#008080de',
    },
    {
      icon: icons.mobile,
    },
    {
      icon: icons.database,
      backgroundColor: '#2468a7',
    },
  ],
  [
    {
      icon: icons.chart,
      backgroundColor: '#b9aa90',
    },
    {
      icon: icons.building,
    },
    {
      icon: icons.mobile,
      backgroundColor: '#de5207fe',
    },
    {
      icon: icons.cube,
    },
    {
      icon: icons.play,
      backgroundColor: '#2468a7',
    },
    {
      icon: icons.terminal,
    },
    {
      icon: icons.shield,
      backgroundColor: '#2468a7',
    },
  ],
  // [
  //   {
  //     icon: icons.download,
  //     backgroundColor: '#de5207fe',
  //   },
  //   {
  //     icon: icons.code,
  //   },
  //   {
  //     icon: icons.testing,
  //     backgroundColor: '#008080de',
  //   },
  //   {
  //     icon: icons.code,
  //   },
  //   {
  //     icon: icons.database,
  //     backgroundColor: '#2468a7',
  //   },
  //   {
  //     icon: icons.code,
  //   },
  //   {
  //     icon: icons.chart,
  //     backgroundColor: '#2468a7',
  //   },
  // ],
  // [
  //   {
  //     icon: icons.chart,
  //     backgroundColor: '#b9aa90',
  //   },
  //   {
  //     icon: icons.building,
  //   },
  //   {
  //     icon: icons.mobile,
  //     backgroundColor: '#de5207fe',
  //   },
  //   {
  //     icon: icons.cube,
  //   },
  //   {
  //     icon: icons.play,
  //     backgroundColor: '#008080de',
  //   },
  //   {
  //     icon: icons.terminal,
  //   },
  //   {
  //     icon: icons.shield,
  //     backgroundColor: '#de5207fe',
  //   },
  // ],
]

export default businessOfferingArtList
