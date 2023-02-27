import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'

/* eslint-disable */
let typeSplit = new SplitType('.hero_heading', {
  types: 'words, chars',
  tagName: 'span',
})
/* eslint-enable */

gsap.from('.slide', {
  scrollTrigger: {
    trigger: '.services_right-col',
    start: '25% bottom',
    end: '80% top',
    scrub: true,
    toggleActions: 'restart none reverse',
  },
  fontSize: '0vw',
  xPercent: 50,
  opacity: 0.5,
  stagger: 0.2,
  ease: 'power2.inOut',
})

let tl = gsap.timeline()

tl.from('.hero_img-wrapper', {
  opacity: 0,
  rotation: 10,
  scale: 0.2,
  duration: 0.8,
  ease: 'power2.inOut',
})
  .from($('.hero_heading').find('.char'), {
    opacity: 0,
    fontSize: '0vw',
    duration: 0.2,
    rotation: 5,
    ease: 'power1.out',
    stagger: { each: 0.1, from: 'end' },
  })
  .to('.hero_img-wrapper', {
    width: '95%',
    height: '95%',
    borderRadius: '1.5rem',
    duration: 0.8,
    ease: 'power2.inOut',
  })

gsap.to('.join_img-wrapper', {
  scrollTrigger: {
    trigger: '.join_img-wrapper',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
    toggleActions: 'restart none reverse none',
  },
  width: '35vw',
  height: '50vw',
  borderRadius: '1rem',
  duration: 1,
})
