import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

gsap.to('.showcase_card-bottom_pixel', {
  motionPath: {
    path: '#path',
    align: '#path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  duration: 6,
  ease: 'Power2.easeInOut',
  repeat: -1,
})
