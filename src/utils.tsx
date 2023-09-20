import { ReactNode } from 'react'
import { HashLink } from 'react-router-hash-link'

const isMobile = () => {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

const HashLinkWithFragment = ({
  children,
  path,
  className,
}: {
  children: ReactNode
  path: string
  className?: string
}): JSX.Element | null => {
  if (!children) return null
  const scrollOffset = (element: Element) => {
    const yCoordinate = element.getBoundingClientRect().top + window.scrollY
    const yOffset = -120
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth',
    })
  }

  return (
    <HashLink
      className={className || ''}
      smooth
      to={'/' + path}
      scroll={element => scrollOffset(element)}
    >
      {children}
    </HashLink>
  )
}

export { isMobile, HashLinkWithFragment }
