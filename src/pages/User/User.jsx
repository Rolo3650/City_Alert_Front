import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LayoutTwo } from '../../containers/layout/LayoutTwo'
import { HeaderTwo } from '../../components/modules/header/HeaderTwo'
import { InfoUser } from '../../containers/user/info/InfoUser'
import { Backdrop, CircularProgress } from '@mui/material'
import { NewPublicationModal } from '../../containers/modal/publication/NewPublicationModal'

const User = () => {

    const { id } = useParams()
    const [openBackDrop, setOpenBackDrop] = useState(true)

    return (
        <LayoutTwo
            header={<HeaderTwo setOpenBackDrop={setOpenBackDrop} />}
        >
            <div className='h-100 w-100 background background-grey d-flex justify-content-center px-5'>
                <InfoUser setOpenBackDrop={setOpenBackDrop} />
            </div>
            <Backdrop
                open={openBackDrop}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
            <NewPublicationModal />
        </LayoutTwo>
    )
}

export { User }