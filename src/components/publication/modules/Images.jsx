import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Images = ({ images }) => {
    return (
        <ImageList
            sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                justifyContent: "center"
            }}
            cols={1}
        >
            {images?.map((image, index) => (
                <ImageListItem
                    sx={{
                        "& img": {
                            width: "100%",
                            height: "auto",
                            maxHeight: "80vh",
                        }
                    }}
                    key={index}
                >
                    <img
                        className='w-100'
                        src={image.image ?? ""}
                        alt="image" 
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export { Images }