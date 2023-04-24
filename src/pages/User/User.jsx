import React from 'react'
import { useParams } from 'react-router-dom'
import { LayoutTwo } from '../../containers/layout/LayoutTwo'
import { HeaderTwo } from '../../components/modules/header/HeaderTwo'
import { InfoUser } from '../../containers/user/info/InfoUser'

const User = () => {

    const { id } = useParams()

    return (
        <LayoutTwo
            header={<HeaderTwo />}
        >
            <div className='h-100 w-100 background background-grey d-flex justify-content-center px-5'>
                    <InfoUser />
            </div>
        </LayoutTwo>
    )
}

export { User }