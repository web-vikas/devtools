import React from 'react'
import useStore from '@/app/(root)/store'
import { Switch } from '../ui/switch'

const DarkMode = () => {
    const darkMode = useStore(state => state.darkMode)
    return (
        <div>
            <label className='block mb-2 text-xs font-medium text-neutral-400'>Dark Mode</label>
            <Switch
                checked={darkMode}
                onCheckedChange={darkMode => useStore.setState({ darkMode })}
            />
        </div>
    )
}

export default DarkMode