import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('.button').on('click', function () {
  const change = Flip.getState(
    '.showcase_card-bg, .showcase_card-paragraph, .showcase_card',
    {
      props: 'borderRadius, padding',
    }
  )

  var card = $(this).attr('nf-el')
  $('.showcase_card').removeClass('active')
  $('.showcase_card.' + card).addClass('active')

  Flip.from(change, {
    duration: 0.6,
    prune: true,
    ease: 'power1.inOut',
  })
})
