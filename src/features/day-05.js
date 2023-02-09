import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const listItems = document.querySelectorAll('.list_item')

listItems.forEach((listItem) => {
  gsap.to(listItem, {
    scrollTrigger: {
      trigger: listItem,
      start: 'top top', // add an offset of 1 second to the start
      end: 'bottom top',
      toggleActions: 'restart none reverse',
    },
    xPercent: -80,
    opacity: 0,
    duration: 2,
    ease: 'power2.inOut',
  })
})

gsap.to('.track_line', {
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'restart none reverse',
    scrub: true,
  },
  height: '100%',
  ease: 'none',
})
