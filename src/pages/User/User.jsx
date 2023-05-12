import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LayoutTwo } from '../../containers/layout/LayoutTwo'
import { HeaderTwo } from '../../components/modules/header/HeaderTwo'
import { InfoUser } from '../../containers/user/info/InfoUser'
import { Backdrop, CircularProgress } from '@mui/material'
import { NewPublicationModal } from '../../containers/modal/publication/NewPublicationModal'
import { useUser } from '../../hooks/user/useUser'

const User = () => {

    const { id } = useParams()
    const [openBackDrop, setOpenBackDrop] = useState(true)
    const navigateTo = useNavigate()
    const { user } = useUser()

    const init = () => {
        if (!user?.id_user) {
            navigateTo('/')
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <LayoutTwo
            header={<HeaderTwo setOpenBackDrop={setOpenBackDrop} />}
        >
            <div className='h-100 w-100 background background-grey d-flex justify-content-center px-5'>
                <InfoUser setOpenBackDrop={setOpenBackDrop} openBackDrop={openBackDrop} />
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