import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

let tl = gsap.timeline()

gsap.to('.icon-player', {
  motionPath: {
    path: '#path',
    align: '#path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  duration: 0,
  ease: 'none',
})
gsap.to('.icon-player', {
  rotation: 360,
  duration: 5,
  ease: 'none',
  repeat: -1,
})
tl.to('.icon-target', {
  motionPath: {
    path: '#path',
    align: '#path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  duration: 5,
  ease: 'none',
  repeat: -1,
})

$('#catch').click(function () {
  gsap.to('.icon-player', {
    motionPath: {
      path: '#path',
      align: '#path',
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    duration: 5,
    ease: 'none',
  })
  gsap.to('.icon-player', {
    rotation: 0,
  })
})
