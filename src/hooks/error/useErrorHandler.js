import React from 'react'

const useErrorHandler = () => {

    const errorHandler = (param) => {

        if (param) {
            return true;
        } else {
            return false;
        }

    }

    return {
        errorHandler
    }
}

export { useErrorHandler }