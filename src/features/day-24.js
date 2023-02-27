import gsap from 'gsap'
import Flip from 'gsap/Flip'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, Flip)

$('.button').on('click', function () {
  const change = Flip.getState(
    '.showcase_card-bg, .showcase_card-paragraph, .showcase_card',
    {
      props: 'borderRadius, padding, opacity',
    }
  )

  var card = $(this).attr('nf-el')
  $('.showcase_card').removeClass('active')
  $('.showcase_card.' + card).addClass('active')

  Flip.from(change, {
    duration: 0.4,
    prune: true,
    ease: 'power2.inOut',
  })
})

$('.showcase_card').each(function () {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: 'center top',
      end: '200% top',
      scrub: true,
    },
  })
  tl.to($(this), { scale: 0, opacity: 0, ease: 'none' })
})
