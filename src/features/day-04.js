import gsap from 'gsap'

let heroTl = gsap.timeline()
let loadTl = gsap.timeline({
  onComplete: () => {
    heroTl
      .fromTo(
        '.nav_container',
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        '.hero_heading',
        {
          yPercent: 50,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        '.hero_illustration',
        {
          scale: 0.9,
          yPercent: 20,
          opacity: 0,
        },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        },
        '<'
      )
  },
})

loadTl
  .to('.intro_load', {
    width: '100%',
    duration: 3,
    ease: 'power1.inOut',
  })
  .to(
    '.intro_load-illustration',
    {
      rotation: 15,
      xPercent: -10,
    },
    '<'
  )
  .to('.intro_split', {
    height: 0,
  })
  .to('.section_intro', {
    display: 'none',
  })
