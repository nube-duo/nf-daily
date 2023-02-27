import { gsap } from 'gsap'

const tl = gsap.timeline()

tl.from('.hero_grid-block', {
  duration: 0.8,
  height: 0,
  borderRadius: 0,
  ease: 'power2.inOut',
  stagger: 0.4,
})
  .from('.hero_heading, .showcase_nav', {
    duration: 0.8,
    opacity: 0,
    scale: 0.9,
    yPrecentage: 10,
    ease: 'power2.inOut',
  })
  .from('.hero_sub-grid', {
    duration: 0.8,
    height: 0,
    padding: '0',
    ease: 'power2.inOut',
  })

window.addEventListener('resize', function () {
  location.reload()
})
