import gsap from 'gsap'

let tl = gsap.timeline()

tl.from('.showcase_card_content', {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: 'power1.inOut',
})
  .from('.showcase_card_img', {
    scale: 0.6,
    opacity: 0,
    borderRadius: '50%',
    duration: 0.5,
    ease: 'power1.inOut',
  })
  .from('.showcase_card_content_inner', {
    delay: 0.1,
    scale: 0.9,
    yPercent: 30,
    opacity: 0,
    duration: 0.5,
    ease: 'power1.inOut',
  })
  .from('.showcase_card_cta-wrapper', {
    delay: 0.4,
    width: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut',
  })
