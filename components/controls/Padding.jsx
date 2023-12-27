import useStore from '@/app/(root)/store'
import React from 'react'
import { Slider } from '../ui/slider'

const Padding = () => {
  const padding = useStore(state => state.padding)

  return (
    <div>
      <label className='block mb-2 text-xs font-medium text-neutral-400'>Padding </label>
      <Slider defaultValue={[padding]} max={128} className='w-44 my-4' onValueChange={([padding]) => useStore.setState({ padding })} />
    </div>
  )
}

export default Padding