import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

gsap.to('.services_gategory-heading', {
  scrollTrigger: {
    trigger: '.services_right-col',
    start: '40% top',
    end: '40% top',
    toggleActions: 'restart none reverse',
  },
  yPercent: -100,
  duration: 0.5,
  ease: 'power2.inOut',
})

gsap.from('.slide', {
  scrollTrigger: {
    trigger: '.services_right-col',
    start: '-25% top',
    end: '80% top',
    scrub: true,
    toggleActions: 'restart none reverse',
  },
  x: '+=5rem',
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  ease: 'power4.out',
})
