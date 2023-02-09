import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const tlHero = gsap.timeline()

tlHero
  .from('[nf-el=heading]', {
    width: 0,
    duration: 1.2,
    ease: 'sine.inOut',
  })
  .from('[nf-el=image]', {
    delay: 0.2,
    width: 0,
    duration: 1.2,
    stagger: 0.4,
    ease: 'sine.inOut',
  })

gsap.utils
  .toArray(document.querySelectorAll('[nf-el=idea]'))
  .forEach((index, i) => {
    gsap.from(index, {
      scrollTrigger: {
        trigger: '.section_ideas',
        start: '35% bottom',
        end: 'bottom bottom',
      },
      delay: i * 1.1,
      width: 0,
      duration: 1,
      onComplete: () => {
        gsap.to(index.querySelector('.ideas_icon'), {
          rotation: 360,
          duration: 10,
          ease: 'linear',
          repeat: -1,
        })
      },
    })
  })
