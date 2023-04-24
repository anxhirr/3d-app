import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
  const group = useRef()
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    // initial position
    let targetPositon = [-0.4, 0, 2]
    if (snap.intro) {
      if (isBreakpoint) targetPositon = [0, 0, 2]
      if (isMobile) targetPositon = [0, 0.2, 2.5]
    } else {
      if (isMobile) targetPositon = [0, 0, 2.5]
      else targetPositon = [0, 0, 2]
    }

    // model camera position
    easing.dampE(group.current.position, targetPositon, 0.25, delta)

    // smooth rotation
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 5, 0],
      0.25
    )
  })

  return <group ref={group}>{children}</group>
}
export default CameraRig
