import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollTrigger)

// ILLUSTRATION ANIMATION
gsap.to('.hero_island, .hero_sky, .hero_water', {
  scrollTrigger: {
    trigger: '.section_hero',
    start: '5% top',
    end: '33% top',
    toggleActions: 'restart none reverse',
    scrub: true,
  },
  width: '100%',
  opacity: 0.95,
  ease: 'power2.inOut',
})

// HERO LOGO ANIMATIONS
gsap.from('.hero_logo-text', {
  scrollTrigger: {
    trigger: '.section_hero',
    start: '5% top',
    end: '40% top',
    toggleActions: 'restart none reverse',
    scrub: true,
  },
  width: '90vw',
  top: '50vh',
  yPercent: -50,
})
// HERO TEXT ANIMATIONS
let tl = gsap.timeline()

tl.from('.hero_heading', {
  opacity: 0,
  yPercent: -100,
}).from(
  '.hero_cta',
  {
    opacity: 0,
    yPercent: -100,
  },
  0
)
ScrollTrigger.create({
  trigger: '.hero_mid',
  start: '30% bottom',
  end: '90% bottom',
  toggleActions: 'restart none reverse',
  scrub: true,
  animation: tl,
})
// SERVICES TEXT ANIMATIONS
gsap.from('.content_heading, .content_paragraph', {
  scrollTrigger: {
    trigger: '.section_services',
    start: 'top bottom',
    end: '45% bottom',
    toggleActions: 'restart none reverse',
    scrub: true,
  },
  yPercent: -100,
  opacity: 0,
  delay: 0.5,
})
// CARD ENTER ANIMATION
gsap.utils.toArray('.card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      end: '200% bottom',
      toggleActions: 'restart none reverse',
      scrub: true,
    },
    yPercent: 50,
    opacity: 0,
  })
})

document.getElementById('cards').onmousemove = (e) => {
  for (const card of document.getElementsByClassName('card')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}

// MODAL POP UP SCRIPT
$(document).ready(function () {
  var buttonThatOpenedModal
  var findModal = function (elem) {
    var tabbable = elem
      .find('select, input, textarea, button, a')
      .filter(':visible')

    var firstTabbable = tabbable.first()
    var lastTabbable = tabbable.last()
    /*set focus on first input*/
    firstTabbable.focus()

    /*redirect last tab to first input*/
    lastTabbable.on('keydown', function (e) {
      if (e.which === 9 && !e.shiftKey) {
        e.preventDefault()
        firstTabbable.focus()
      }
    })

    /*redirect first shift+tab to last input*/
    firstTabbable.on('keydown', function (e) {
      if (e.which === 9 && e.shiftKey) {
        e.preventDefault()
        lastTabbable.focus()
      }
    })

    /* allow escape key to close insiders div */
    elem.on('keydown', function (e) {
      if (e.keyCode === 27) {
        $(elem).find('.modal-close_btn').click()
      }
    })
  }

  var modalOpenButton = $('.modal-open_btn')
  modalOpenButton.on('keydown', function (e) {
    // Only activate on spacebar and enter
    if (e.which !== 13 && e.which !== 32) {
      return
    }

    e.preventDefault()

    // Simulate a mouseclick to trigger Webflow's IX2/Interactions
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
    $(this).get(0).dispatchEvent(evt)
  })
  modalOpenButton.on('click', function () {
    $(this).next().show()
    findModal($(this).next())
    buttonThatOpenedModal = $(this)
  })

  var modalCloseButton = $('.modal-close_btn, .modal-close_area')
  modalCloseButton.on('keydown', function (e) {
    // Only activate on spacebar and enter
    if (e.which !== 13 && e.which !== 32) {
      return
    }

    e.preventDefault()

    // Simulate a mouseclick to trigger Webflow's IX2/Interactions
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
    $(this).get(0).dispatchEvent(evt)
  })
  modalCloseButton.on('click', function () {
    $(this).closest('.modal-wrapper').hide()
    if (buttonThatOpenedModal) {
      buttonThatOpenedModal.focus()
      buttonThatOpenedModal = null
    }
  })
})
