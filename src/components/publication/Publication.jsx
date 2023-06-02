import { Avatar } from '@mui/material'
import moment from 'moment/moment'
import React, { useEffect } from 'react'
import { Description } from './modules/Description'
import { Images } from './modules/Images'
import { AlertCustom } from './modules/Alert'
import { Coments } from '../../containers/publication/modules/Coments'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../../hooks/themes/useColors'

const Publication = ({ publication, setOpenBackDrop }) => {

    const navigateTo = useNavigate()
    const { colors } = useColors();
    const { theme } = colors

    const navigateUser = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo('/user/' + publication?.user?.id_user)
        }, 500)
    }

    return (
        <div className={`publication border-rounded-all-10 background ${theme == 'dark' ? 'background-grey' : 'background-white'} px-4 py-3 mb-3`}>
            <div className='d-flex align-items-center mb-3'>
                <div>
                    <Avatar
                        onClick={navigateUser}
                        sx={{
                            ":hover": {
                                cursor: "pointer"
                            }
                        }}
                        src={`${publication?.user?.avatar?.url != '_' ? publication?.user?.avatar?.url : "" }`}
                    />
                </div>
                <div className={`mx-3 w-75 ${theme == 'dark' ? 'text-color-white' : ''}`} >
                    <h6 className='m-0 text-poppins text-truncate text-weight-600 mb-1'>
                        {publication?.user?.person?.name ?? ""} ~ {publication?.user?.email ?? ""}
                    </h6>
                        <p className={`m-0 text-poppins text-weight-400 ${theme == 'dark' ? 'text-color-light-grey' : 'text-color-grey'}`}>
                        {`
                        ${moment(publication?.date ?? new Date()).format("DD/MM/YYYY h:mm a")}
                        | ${publication?.settlement?.name ?? ""}
                        | ${publication?.settlement?.pc?.municipality?.municipality ?? ""}
                        `}
                    </p>
                </div>
            </div>
            {publication?.description &&
                <Description description={publication?.description} />
            }
            {publication?.images?.length > 0 &&
                <Images images={publication?.images} />
            }
            {publication?.publication_type &&
                <AlertCustom alert={publication?.publication_type} />
            }
            <Coments publication={publication} setOpenBackDrop={setOpenBackDrop} />
        </div>
    )
}

export { Publication }