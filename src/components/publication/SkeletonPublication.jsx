import { Avatar, Skeleton, Typography } from '@mui/material'
import React from 'react'

const SkeletonPublication = () => {
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center'>
                <div>
                    <Skeleton
                        variant='circular'
                        animation='wave'
                    >
                        <Avatar />
                    </Skeleton>
                </div>
                <div className='w-100'>
                    <Skeleton
                        animation='wave'
                        width='50%'
                        sx={{ marginLeft: '10px' }}
                    >
                        <Typography>.</Typography>
                    </Skeleton>
                    <Skeleton
                        animation='wave'
                        width='25%'
                        sx={{ marginLeft: '10px' }}
                    >
                        <Typography>.</Typography>
                    </Skeleton>
                </div>
            </div>
            <div className='w-100 my-3'>
                <Skeleton
                    variant="rounded"
                    width="100%"
                    animation="wave"
                >
                    <div style={{ height: '50vh' }} />
                </Skeleton>
            </div>
            <div>
                <Skeleton
                    animation='wave'
                    width='100%'
                >
                    <Typography>.</Typography>
                </Skeleton>
                <Skeleton
                    animation='wave'
                    width='100%'
                >
                    <Typography>.</Typography>
                </Skeleton>
            </div>
        </div>
    )
}

export { SkeletonPublication }