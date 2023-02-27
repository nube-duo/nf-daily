import gsap from 'gsap'

let tl = gsap.timeline()

tl.from('.hero_img', {
  duration: 2.5,
  height: '12rem',
  width: '12rem',
  borderRadius: '100%',
  ease: 'power2.inOut',
}).from('.hero_hero-wrapper, .hero_sub-wrapper', {
  height: 0,
  duration: 0.8,
  opacity: 0.2,
  ease: 'power2.inOut',
})
