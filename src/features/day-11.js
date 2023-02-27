import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('.showcase_card').on('click', function () {
  const state = Flip.getState('.showcase_card')

  $(this).toggleClass('stacked')

  Flip.from(state, {
    duration: 0.5,
    ease: 'power1.inOut',
  })
})
