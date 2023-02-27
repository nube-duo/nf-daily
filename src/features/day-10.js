import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Observer)

let object = {
  value: 1,
}

let tl = gsap.timeline({
  repeat: -1,
  onReverseComplete: () => {
    tl.progress(1)
  },
})

tl.fromTo(
  '.showcase_marquee_list',
  {
    xPercent: 0,
  },
  {
    xPercent: -100,
    duration: 50, // replace this for initial speed of the marquee
    ease: 'none',
  }
)

Observer.create({
  target: window,
  type: 'wheel,scroll,touch',
  onChangeY: (self) => {
    let v = self.velocityY * 0.002
    v = gsap.utils.clamp(-40, 40, v) // replace clamp values for total increment of speed change
    tl.timeScale(v)
    let resting = 1
    if (v < 0) {
      resting = -1
    }
    gsap.fromTo(
      object,
      { value: v },
      {
        value: resting,
        duration: 1,
        onUpdate: () => {
          tl.timeScale(object.value)
        },
      }
    )
  },
})

$('[nf-el=control]').on('click', function () {
  $(this).toggleClass('paused')
  if ($(this).hasClass('paused')) {
    $(this).find('.showcase_controls_play').css('display', 'flex')
    $(this).find('.showcase_controls_pause').css('display', 'none')
    tl.pause()
  } else {
    $(this).find('.showcase_controls_play').css('display', 'none')
    $(this).find('.showcase_controls_pause').css('display', 'flex')
    tl.resume()
  }
})

let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (reduceMotion.matches) {
  tl.pause()
}
