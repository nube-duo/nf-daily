import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)
import SplitType from 'split-type'

let tlLoader = gsap.timeline()
let tlContent = gsap.timeline()

/* eslint-disable */
let typeSplit = new SplitType('.showcase_heading', {
  types: 'chars',
  tagName: 'span',
})
/* eslint-enable */

tlContent
  .from($('.showcase_heading').find('.char'), {
    opacity: 0,
    yPercent: 20,
    rotation: 10,
    duration: 0.5,
    ease: 'power1.out',
    stagger: { each: 0.2, from: 'start' },
  })
  .from('.showcase_paragraph', {
    opacity: 0,
    yPercent: 20,
    duration: 0.8,
    ease: 'power2.out',
  })
  .from('.showcase_grid-ill', {
    opacity: 0,
    yPercent: 20,
    duration: 0.8,
    ease: 'power2.out',
    stagger: { each: 0.4 },
  })

tlContent.pause()

tlLoader
  .from('.showcase_loader-color', {
    width: '5vw',
    height: '0vw',
    duration: 0.8,
    stagger: { each: 0.4 },
    onComplete: () => {
      const state = Flip.getState('.showcase_loader-color')
      Flip.from(state, {
        targets: '.color-stripe_item',
        duration: 0.8,
        absolute: true,
        ease: 'power1.inOut',
        stagger: { each: 0.2 },
        onComplete: () => {
          tlContent.play()
        },
      })
    },
  })
  .to('.showcase_loader', {
    opacity: 0,
  })
  .set('.showcase_loader', {
    display: 'none',
  })
