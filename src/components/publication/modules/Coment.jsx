import { Avatar } from '@mui/material'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Coment = ({ coment, setOpenBackDrop }) => {

    const navigateTo = useNavigate()

    const navigateUser = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo('/user/' + coment?.user?.id_user)
        }, 500)
    }

    return (
        <div className='mb-3'>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <Avatar
                        onClick={navigateUser}
                        sx={{
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}
                        src={`${coment?.user?.avatar?.url != '_' ? coment?.user?.avatar?.url : ""}`}
                    />
                </div>
                <div className='mx-3 w-100' >
                    <h6 className='m-0 text-poppins text-truncate text-weight-600 mb-1'>
                        {coment?.user?.person?.name ?? ""} ~ {coment?.user?.email ?? ""}
                    </h6>
                    <p className='m-0 text-poppins text-weight-400 text-color-grey'>
                        {`
                        ${moment(coment?.date ?? new Date()).format("DD/MM/YYYY h:mm a")}
                    `}
                    </p>
                </div>
            </div>
            <div>
                {coment?.coment}
            </div>
        </div>
    )
}

export { Coment }