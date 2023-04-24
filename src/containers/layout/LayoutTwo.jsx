import React from 'react'

const LayoutTwo = ({ children, header }) => {
    return (
        <div className='layout layout-two'>
            {header}
            <div className='child'>
                {children}
            </div>
        </div>
    )
}

export { LayoutTwo }