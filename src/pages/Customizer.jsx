import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import {
  CustomButton,
  AiPicker,
  ColorPicker,
  FilePicker,
  Tab,
} from '../components'

const Customizer = () => {
  const snap = useSnapshot(state)

  console.log('snap', snap.intro)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab, index) => (
                  <Tab key={tab.name} tab={tab} onClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className='absolute top-5 right-5 z-10'
            {...fadeAnimation}
          >
            <CustomButton
              type='filled'
              title='Go Back'
              onClick={() => (state.intro = true)}
              className='w-fit px-4 py-2.5 text-sm font-bold'
            />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab, index) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=''
                onClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
export default Customizer
