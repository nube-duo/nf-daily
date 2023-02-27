import gsap from 'gsap'

const tl = gsap.timeline()

tl.from('.showcase_navigation', {
  width: '5rem',
  duration: 1.5,
  delay: 0.5,
  ease: 'power2.inOut',
})
  .from(
    '.showcase_navigation_start',
    {
      rotation: 360,
      duration: 1.6,
      delay: 0.5,
      ease: 'power1.inOut',
    },
    0
  )
  .from('.showcase_navigation_action', {
    scale: 0,
    duration: 0.5,
    ease: 'power1.inOut',
  })
  .from('.showcase_navigation_nav-link_wrapper', {
    width: 0,
    duration: 0.6,
    ease: 'power1.inOut',
  })
