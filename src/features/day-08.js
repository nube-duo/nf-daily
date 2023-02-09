import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('.grid_img-wrapper').on('click', function () {
  const state = Flip.getState('.grid_img')

  let mainImg = $('.grid_img-main img')
  $(this).find('img').appendTo($('.grid_img-main'))
  mainImg.appendTo($(this))

  Flip.from(state, {
    duration: 1,
    ease: 'power1.inOut',
  })
})
