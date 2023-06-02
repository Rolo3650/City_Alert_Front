import React from 'react'
import { useColors } from '../../hooks/themes/useColors'

const Options = ({ children }) => {

    const { colors } = useColors()
    const { theme } = colors

    return (
        <div className={`py-4 background border-rounded-all-10 ${theme == 'dark' ? 'background-grey' : 'background-white'}`}>
            {children}
        </div>
    )
}

export { Options }