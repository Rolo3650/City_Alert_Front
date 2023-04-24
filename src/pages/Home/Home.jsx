import React from 'react'
import { LayoutOne } from '../../containers/layout/LayoutOne'
import { HeaderOne } from '../../components/modules/header/HeaderOne'
import { useEffect } from 'react'
import { LeftAside } from '../../containers/asside/LeftAside'
import { RightAside } from '../../containers/asside/RigthAside'
import { Publications } from '../../containers/publication/Publications'
import { usePublication } from '../../hooks/publiccation/usePublication'
import { Backdrop, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/user/useUser'
import { NewPublicationModal } from '../../containers/modal/publication/NewPublicationModal'

const Home = () => {

    const { getAllApiPublications } = usePublication()
    const [openBackDrop, setOpenBackDrop] = useState(true)
    const navigateTo = useNavigate()
    const { user } = useUser()

    const init = () => {
        if (!user?.id_user) {
            navigateTo('/')
        } else {
            setTimeout(() => {
                setOpenBackDrop(false)
            }, 500)
            getAllApiPublications()
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <LayoutOne
                header={<HeaderOne setOpenBackDrop={setOpenBackDrop} />}
            >
                <div className='left h-100 background background-grey'>
                    <LeftAside

                    >
                        Hola1
                    </LeftAside>
                </div>
                <div className='middle p-4 background background-grey'>
                    <Publications />
                </div>
                <div className='right background background-grey'>
                    <RightAside

                    >
                        Hola3
                    </RightAside>
                </div>
            </LayoutOne>
            <NewPublicationModal />
            <Backdrop
                open={openBackDrop}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
        </>
    )
}

export { Home }