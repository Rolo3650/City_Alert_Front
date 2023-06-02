import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useColors } from '../../hooks/themes/useColors';

const RightAside = ({ children }) => {

    const [lastX, setLastX] = useState(0);
    const [width, setWidth] = useState(400);
    const [maxWidth, setMaxWidth] = useState(400);
    const { colors } = useColors();
    const { theme } = colors

    const handleWidth = () => {
        let windowWidth = window.innerWidth
        let isResizing = false;

        const handleMouseDown = (e) => {
            isResizing = true;
            setLastX(e.clientX);
            let maxWidth = document.getElementById('resize-left')?.offsetWidth;
            setMaxWidth(parseInt(maxWidth ? maxWidth : 0))
        };

        const handleMouseMove = (e) => {
            if (isResizing) {
                let element = document.getElementById('resize-right-btn');
                let deltaX = parseInt(e.clientX) - parseInt(lastX);
                let newWidth = parseInt(element.offsetWidth) + parseInt(deltaX);
                setWidth(windowWidth - newWidth)
                setLastX(e.clientX);
            }
        };

        document.getElementById('resize-right-btn')?.addEventListener('mousedown', handleMouseDown);

        document.addEventListener('mousemove', handleMouseMove);

        document.addEventListener('mouseup', function (e) {
            isResizing = false;
        });
    }

    useEffect(() => {
        setTimeout(() => {
            handleWidth()
        }, 500)
    }, [])

    return (
        <div
            className='aside aside-right'
            id='resize-right'
            style={{
                width: width + 'px',
                maxWidth: `calc(100vw - ${maxWidth + 400}px)`
            }}
        >
            <button
                className={`btn btn-aside ${theme}`}
                id='resize-right-btn'
            />
            <div style={{
                width: (width - 1) + 'px',
                minWidth: '300px',
                maxWidth: `calc(100vw - ${maxWidth + 399}px)`
            }}>
                {children}
            </div>
        </div>
    )
}

export { RightAside }