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
import { useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../hooks/user/useUser'
import { NewPublicationModal } from '../../containers/modal/publication/NewPublicationModal'
import { PublicationsResume } from '../../containers/publication/PublicationsResume'
import { useSearch } from '../../hooks/publiccation/useSearch'

const Home = () => {

    const { getAllApiPublications, getAllApiNearUser } = usePublication()
    const { filterPublications } = useSearch()
    const [openBackDrop, setOpenBackDrop] = useState(true)
    const navigateTo = useNavigate()
    const { user } = useUser()
    const { query } = useParams();

    const init = () => {
        if (!user?.id_user) {
            navigateTo('/')
        } else {
            setTimeout(() => {
                setOpenBackDrop(false)
            }, 500)
            getAllApiPublications()
            getAllApiNearUser()
        }
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        filterPublications(query)
    }, [query])

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
                    <Publications setOpenBackDrop={setOpenBackDrop} />
                </div>
                <div className='right background background-grey'>
                    <RightAside
                    >
                        <div className='p-4'>
                            <p className='m-0 text-poppins text-weight-600 mb-3 px-4 py-2 background-white background border-rounded-all-10'>
                                Cerca de tí
                            </p>
                            <PublicationsResume setOpenBackDrop={setOpenBackDrop} />
                        </div>
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