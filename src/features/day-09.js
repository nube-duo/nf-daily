import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('#change-view').on('click', function () {
  let tl = gsap.timeline()

  tl.to('#change-view-icon', {
    rotation: 360,
    duration: 0.5,
    ease: 'power2.inOut',
  }).to('#change-view-icon', {
    rotation: 0,
    duration: 0,
    ease: 'none',
  })

  const change = Flip.getState(
    '.posts_list-grid, .posts_list-item_content, .posts_list-item_img-wrapper, .posts_list-item_link, .posts_list-item_text, .posts_list-item_img'
  )

  $('.posts_list-grid').toggleClass('grid-view')
  $('.posts_list-item_content').toggleClass('grid-view')
  $('.posts_list-item_img-wrapper').toggleClass('grid-view')
  $('.posts_list-item').toggleClass('grid-view')

  Flip.from(change, {
    duration: 0.5,
    nested: true,
    prune: true,
    ease: 'power1.inOut',
  })
})
