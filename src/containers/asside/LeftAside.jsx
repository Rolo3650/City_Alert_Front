import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const LeftAside = ({ children }) => {

    const [lastX, setLastX] = useState(0);
    const [width, setWidth] = useState(400);
    const [maxWidth, setMaxWidth] = useState(400);

    const handleWidth = () => {
        let isResizing = false;

        const handleMouseDown = (e) => {
            isResizing = true;
            setLastX(e.clientX);
            let maxWidth = document.getElementById('resize-right')?.offsetWidth;
            setMaxWidth(parseInt(maxWidth ? maxWidth : 0))
        };

        const handleMouseMove = (e) => {
            if (isResizing) {
                let element = document.getElementById('resize-left-btn');
                let deltaX = parseInt(e.clientX) - parseInt(lastX);
                let newWidth = parseInt(element.offsetWidth) + parseInt(deltaX);
                setWidth(newWidth)

                setLastX(e.clientX);
            }
        };

        document.getElementById('resize-left-btn')?.addEventListener('mousedown', handleMouseDown);

        document.addEventListener('mousemove', handleMouseMove);

        document.addEventListener('mouseup', function (e) {
            isResizing = false;
        });
    }

    useEffect(() => {
        handleWidth()
    }, [])

    return (
        <div
            className='aside aside-left'
            id='resize-left'
            style={{
                width: width + 'px',
                maxWidth: `calc(100vw - ${maxWidth + 400}px)`
            }}
        >
            <div>
                {children}
            </div>
            <button
                className='btn btn-aside'
                id='resize-left-btn'
            />
        </div>
    )
}

export { LeftAside }