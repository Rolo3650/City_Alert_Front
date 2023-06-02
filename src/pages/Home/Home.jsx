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
import { Options } from '../../containers/widgets/Options'
import { Navigate } from '../../components/widgets/Navigate'
import NearMeIcon from '@mui/icons-material/NearMe';
import PublicIcon from '@mui/icons-material/Public';
import { ChangeTheme } from '../../components/widgets/ChangeTheme'
import { NavigateUser } from '../../components/widgets/NavigateUser'
import { useColors } from '../../hooks/themes/useColors'

const Home = () => {

    const { getAllApiPublications, getAllApiNearUser } = usePublication()
    const { filterPublications } = useSearch()
    const [openBackDrop, setOpenBackDrop] = useState(true)
    const navigateTo = useNavigate()
    const { user } = useUser()
    const { query } = useParams();
    const [navigate, setNavigate] = useState({
        label: 'Cerca de mí',
        route: `/home/${user?.person?.settlement?.name}`,
        icon: <NearMeIcon />
    })
    const { colors } = useColors()
    const { theme } = colors

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
        if (query == user?.person?.settlement?.name) {
            setNavigate({
                ...navigate,
                label: 'Publicaciones recientes',
                route: `/home`,
                icon: <PublicIcon />
            })
        } else {
            setNavigate({
                ...navigate,
                label: 'Cerca de mí',
                route: `/home/${user?.person?.settlement?.name}`,
                icon: <NearMeIcon />
            })
        }
    }, [query])

    return (
        <>
            <LayoutOne
                header={<HeaderOne setOpenBackDrop={setOpenBackDrop} />}
            >
                <div className={`left h-100 background ${theme == 'dark' ? 'background-dark-grey' : 'background-light-grey'}`}>
                    <LeftAside

                    >
                        <div className='p-4'>
                            <Options >
                                <NavigateUser />
                                <hr className='m-0 mb-3' />
                                <Navigate
                                    label={navigate?.label}
                                    icon={navigate?.icon}
                                    route={navigate?.route}
                                />
                                <hr className='m-0 mb-3' />
                                <ChangeTheme />
                                <hr className='m-0' />
                            </Options>
                        </div>
                    </LeftAside>
                </div>
                <div className={`middle p-4 background ${theme == 'dark' ? 'background-dark-grey' : 'background-light-grey'}`}>
                    <Publications setOpenBackDrop={setOpenBackDrop} />
                </div>
                <div className={`right background ${theme == 'dark' ? 'background-dark-grey' : 'background-light-grey'}`}>
                    <RightAside
                    >
                        <div className='p-4'>
                            <p className={`m-0 text-poppins text-weight-600 mb-3 px-4 py-2 ${theme == 'dark' ? 'background-grey text-color-white' : 'background-white'} background border-rounded-all-10`}>
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