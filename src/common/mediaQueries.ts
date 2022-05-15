import { useCallback, useEffect, useState } from 'react'

export const breakpoints = {
  mobile: '415px',
  tablet: '700px',
  laptop: '1140px',
  desktop: '1400px',
}

export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  laptop: `@media (min-width: ${breakpoints.laptop})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
}

// hook fixing media queries with SSR
// https://github.com/vercel/next.js/discussions/14810#discussioncomment-61177

export const useMediaQuery = (query: string) => {
  const [isMatching, setIsMatching] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setIsMatching(true)
    } else {
      setIsMatching(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(query.replace('@media ', ''))
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setIsMatching(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return isMatching
}

export const useMediaQueries = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const isLaptop = useMediaQuery(mediaQueries.laptop)
  const isDesktop = useMediaQuery(mediaQueries.desktop)

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  }
}
