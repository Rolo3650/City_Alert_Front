import React from 'react'
import { useEffect } from 'react'
import { usePublication } from '../../hooks/publiccation/usePublication'
import { PublicationResume } from '../../components/publication/PublicationResume'

const PublicationsResume = ({ setOpenBackDrop }) => {

    let { publications_resume } = usePublication()

    return (
        <div className='p-4 background-white background border-rounded-all-10'>
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