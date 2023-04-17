import React from 'react'

const LayoutOne = ({ children, header }) => {
    return (
        <div className='layout layout-one'>
            {header}
            <div className='child'>
                {children}
            </div>
        </div>
    )
}

export { LayoutOne }