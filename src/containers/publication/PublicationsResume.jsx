import React from 'react'
import { useEffect } from 'react'
import { usePublication } from '../../hooks/publiccation/usePublication'
import { PublicationResume } from '../../components/publication/PublicationResume'
import { useColors } from '../../hooks/themes/useColors'

const PublicationsResume = ({ setOpenBackDrop }) => {

    let { publications_resume } = usePublication()
    const { colors } = useColors()
    const { theme } = colors

    return (
        <div className={`p-4 ${theme == 'dark' ? 'background-grey' : 'background-white'} background border-rounded-all-10`}>
            {publications_resume.publicationList.length > 0 &&
                publications_resume.publicationList.map(publication =>
                    <PublicationResume key={publication.id_publication} publication={publication} setOpenBackDrop={setOpenBackDrop} />
                )
            }
            {publications_resume.publicationList.length < 1 &&
                <p className='text-center text-poppins text-weight-600'>No hay publicaciones cerca de tí</p>
            }
        </div>
    )
}

export { PublicationsResume }