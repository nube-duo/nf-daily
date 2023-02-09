import gsap from 'gsap'

const tl = gsap.timeline()

tl.from('.navbar_wrapper', {
  duration: 0.8,
  opacity: 0,
  scale: 0.9,
  ease: 'power2.inOut',
})
  .from('.hero_el', {
    duration: 0.8,
    opacity: 0,
    scale: 0.9,
    rotation: 50,
    borderRadius: '100%',
    xPercent: 100,
    yPercent: 20,
    ease: 'power2.inOut',
    stagger: 0.5,
  })
  .from('[nf-el=text', {
    yPercent: 50,
    duration: 0.8,
    opacity: 0,
    ease: 'power2.inOut',
  })
  .from('.hero_bg-el', {
    opacity: 0,
    duration: 1,
    scale: 0.5,
    ease: 'power1.inOut',
  })
  .to(
    '[nf-el=rotate]',
    {
      duration: 80,
      rotation: -360,
      ease: 'linear',
      repeat: -1,
    },
    1
  )
  .to(
    '[nf-el=rotate-reverse]',
    {
      duration: 80,
      rotation: 360,
      ease: 'linear',
      repeat: -1,
    },
    1
  )
