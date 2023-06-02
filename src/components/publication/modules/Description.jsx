import React from 'react'
import { useColors } from '../../../hooks/themes/useColors';

const Description = ({ description }) => {

    const { colors } = useColors();
    const { theme } = colors

    return (
        <div className={`text-weight-400 mb-3 ${theme == 'dark' ? 'text-color-white' : ''}`}>
            {description}
        </div>
    )
}

export { Description }