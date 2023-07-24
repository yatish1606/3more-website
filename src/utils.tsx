import { HashLink } from 'react-router-hash-link'

const isMobile = () => {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

const HashLinkWithFragment = ({
  children,
  path,
}: {
  children: any[]
  path: string
}): JSX.Element | null => {
  if (!children || !children.length) return null
  const scrollOffset = (element: Element) => {
    const yCoordinate = element.getBoundingClientRect().top + window.scrollY
    const yOffset = -64
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth',
    })
  }

  return (
    <HashLink smooth to={'/' + path} scroll={element => scrollOffset(element)}>
      {children}
    </HashLink>
  )
}

export { isMobile, HashLinkWithFragment }
