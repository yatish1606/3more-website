import AniruddhaTongaonkar from '../assets/images/AniruddhaTongaonkar.png'
import VinayaChitale from '../assets/images/VinayaChitale.jpg'

interface Testimonial {
  review: string
  author: string
  authorRole?: string
  authorWorkplace?: string
  authorPhoto?: string
}

const testimonials: Array<Testimonial> = [
  {
    review: `Climasys for OPD and IPD is a very easy-to-use product with multi-specialty support at reasonable cost. The team is very flexible and their service is admirable!`,
    author: `Dr. Vinaya Chitale`,
    authorRole: 'Director',
    authorWorkplace: 'ENoTh Foundation',
    authorPhoto: VinayaChitale,
  },
  {
    review: `Thank you and your team for the V-Track application developed for our business. We are very happy with the whole approach, deliverables and final quality of the product. Your support has been good till date and we expect the same in future.`,
    author: `Nitin Patil`,
    authorRole: 'CTO',
    authorWorkplace: 'Spices & Spirits UK',
  },
  {
    review: `We went through various OPD & IPD software products and chose Climasys. It is simple to use and suits our requirements. Their service is excellent. Thanks to Climasys team for making my Clinic more efficient…`,
    author: `Dr.Aniruddha Tongaonkar`,
    authorRole: 'Director',
    authorWorkplace: 'Tongaonkar Hospital',
    authorPhoto: AniruddhaTongaonkar,
  },
]

export default testimonials

export type { Testimonial }
