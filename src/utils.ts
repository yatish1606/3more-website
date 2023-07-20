const isMobile = () => {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

export { isMobile }
