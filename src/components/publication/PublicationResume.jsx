import { Avatar } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Description } from './modules/Description'
import { useNavigate } from 'react-router-dom'

const PublicationResume = ({ publication, setOpenBackDrop }) => {

    const navigateTo = useNavigate()

    const navigateUser = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo('/user/' + publication?.user?.id_user)
        }, 500)
    }

    return (
        <div>
            <div className='d-flex align-items-center mb-3'>
                <div>
                    <Avatar
                        onClick={navigateUser}
                        sx={{
                            ":hover": {
                                cursor: "pointer"
                            }
                        }}
                        src={`${publication?.user?.avatar?.url != '_' ? publication?.user?.avatar?.url : ""}`}
                    />
                </div>
                <div className='mx-3 w-75' >
                    <h6 className='m-0 text-poppins text-truncate text-weight-600 mb-1'>
                        {publication?.user?.person?.name ?? ""} ~ {publication?.user?.email ?? ""}
                    </h6>
                    <p className='m-0 text-poppins text-weight-400 text-color-grey'>
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
        </div>
    )
}

export { PublicationResume }