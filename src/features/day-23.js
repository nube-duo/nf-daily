import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

$('.showcase_column').on('mouseenter mouseleave', function () {
  const change = Flip.getState(
    '.showcase_column-title, .showcase_column, .showcase_column-content_paragraph, .showcase_column_graphic',
    {
      props: 'transform, position, opacity, color',
    }
  )

  $(this).toggleClass('is--active')

  Flip.from(change, {
    duration: 0.6,
    prune: true,
    ease: 'power1.inOut',
  })
})
