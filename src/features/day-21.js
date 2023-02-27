import gsap from 'gsap'

let tl = gsap.timeline()

$('.showcase_switch').on('click', function () {
  if ($(this).hasClass('is--dark')) {
    tl.clear()
      .to('.showcase_grid-item_overlay', {
        height: '0%',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.showcase_overlay',
        {
          height: '0%',
          duration: 1,
          ease: 'power1.inOut',
        },
        0.2
      )
      .to(
        '.section_showcase',
        {
          color: '#fa410f',
          duration: 1,
          ease: 'power2.inOut',
        },
        0
      )
  } else {
    tl.clear()
      .to('.showcase_grid-item_overlay', {
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.showcase_overlay',
        {
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
        },
        0.2
      )
      .to(
        '.section_showcase',
        {
          color: '#ffffff',
          duration: 1,
          ease: 'power2.inOut',
        },
        0
      )
  }
  $(this).toggleClass('is--dark')
})
