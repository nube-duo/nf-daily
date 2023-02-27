import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('.showcase_nav_button').on('click', function () {
  const change = Flip.getState('.showcase_nav_link')

  $('.showcase_nav_link').toggleClass('is--inactive')

  Flip.from(change, {
    duration: 1,
    prune: true,
    ease: 'none',
  })
})

$('.showcase_nav_link').on('click', function () {
  const change = Flip.getState('.showcase_grid_item')

  var card = $(this).attr('nf-el')
  $('.showcase_grid_item').removeClass('is--active')
  $('.showcase_grid_item.' + card).addClass('is--active')

  Flip.from(change, {
    duration: 0.6,
    prune: true,
    ease: 'power1.inOut',
  })
})

$('.showcase_nav_link.is--reset').on('click', function () {
  $('.showcase_grid_item').addClass('is--active')
})
