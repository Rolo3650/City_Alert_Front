import { Avatar } from '@mui/material'
import moment from 'moment'
import React from 'react'

const Coment = ({ coment }) => {
    return (
        <div className='mb-3'>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <Avatar />
                </div>
                <div className='mx-3 w-100' >
                    <h6 className='m-0 text-poppins text-weight-600 mb-1'>
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