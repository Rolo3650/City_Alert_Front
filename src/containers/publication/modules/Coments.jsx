import React, { useState } from 'react'
import { Coment } from '../../../components/publication/modules/Coment'
import { Button } from '@mui/material'
import { AddComent } from '../../../components/publication/actions/AddComent'
import { useColors } from '../../../hooks/themes/useColors'

const Coments = ({ publication, setOpenBackDrop }) => {

    const [seeMore, setSeeMore] = useState(false)
    const { colors } = useColors();
    const { theme } = colors

    const onClick = () => {
        setSeeMore(!seeMore)
    }

    return (
        <div className={`background ${theme == 'dark' ? 'background-dark-grey' : 'background-light-grey'} p-3 border-rounded-all-10`}>
            {publication?.coments.length > 0 && !seeMore &&
                <Coment coment={publication?.coments[0]} setOpenBackDrop={setOpenBackDrop} />
            }
            {publication?.coments.length > 1 && !seeMore &&
                <div className='d-flex justify-content-center mb-3'>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={onClick}
                    >
                        VER MÁS
                    </Button>
                </div>
            }
            {publication?.coments.length > 0 && seeMore &&
                publication?.coments?.map((coment, index) => <Coment coment={coment} key={index} />)
            }
            {seeMore &&
                <div className='d-flex justify-content-center mb-3'>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={onClick}
                    >
                        VER MENOS
                    </Button>
                </div>
            }
            <AddComent publication={publication} />
        </div>
    )
}

export { Coments }