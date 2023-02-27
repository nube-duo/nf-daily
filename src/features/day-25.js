import gsap from 'gsap'
import SplitType from 'split-type'

/* eslint-disable */
let typeSplit = new SplitType('.showcase_heading', {
  types: 'words, chars',
  tagName: 'span',
})
/* eslint-enable */

gsap.from($('.showcase_heading').find('.char'), {
  opacity: 0,
  fontSize: '0vw',
  duration: 0.2,
  rotation: 20,
  ease: 'power1.out',
  stagger: { each: 0.1, from: 'start' },
})

$('[nf-el=words]').on('click', function () {
  // Grow stagger word
  gsap.from($('.showcase_heading').find('.word'), {
    opacity: 0,
    fontSize: '0vw',
    xPercent: 100,
    rotation: 20,
    duration: 0.4,
    ease: 'power1.out',
    stagger: { each: 0.3, from: 'start' },
  })
})
$('[nf-el=chars]').on('click', function () {
  // Grow stagger char
  gsap.from($('.showcase_heading').find('.char'), {
    opacity: 0,
    fontSize: '0vw',
    rotation: 20,
    duration: 0.4,
    ease: 'power1.out',
    stagger: { each: 0.2, from: 'start' },
  })
})
