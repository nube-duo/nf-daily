import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wrappers = document.querySelectorAll(
  '.features_content-images_img-wrapper'
)
const listItems = document.querySelectorAll('.features_content-text_list-item')

wrappers.forEach((wrapper, index) => {
  gsap.from(wrapper.querySelector('.features_content-images_img'), {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 50%',
      end: '50% top',
      scrub: true,
      onEnter: () => {
        listItems.forEach((item) => {
          item.classList.remove('active')
        })
        listItems[index].classList.add('active')
      },
      onLeaveBack: () => {
        listItems[index].classList.remove('active')
        if (index > 0) {
          listItems[index - 1].classList.add('active')
        }
      },
    },
  })
})

gsap.to('.features_content-text_progress-indicator', {
  scrollTrigger: {
    trigger: '.section_features',
    start: 'top 50%',
    end: 'bottom top',
    toggleActions: 'restart none reverse none',
    scrub: true,
  },
  width: '100%',
})
