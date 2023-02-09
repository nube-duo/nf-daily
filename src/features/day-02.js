import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

gsap.to('.intro', {
  scale: 1,
  borderRadius: '0',
  ease: 'none',
  scrollTrigger: {
    trigger: '.intro',
    start: 'top bottom',
    end: 'top center',
    scrub: true,
  },
})

if (window.innerWidth > 768) {
  gsap.to('.section_chapter, .section_intro', {
    xPercent: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section_intro',
      start: 'top top',
      end: 'center top',
      scrub: true,
      pin: '.section_chapter, .section_intro',
    },
  })
}
