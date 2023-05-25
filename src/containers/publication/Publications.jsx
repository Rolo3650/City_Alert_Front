import React, { useEffect } from 'react'
import { usePublication } from '../../hooks/publiccation/usePublication'
import { SkeletonPublication } from '../../components/publication/SkeletonPublication';
import { Publication } from '../../components/publication/Publication';

const Publications = ({ setOpenBackDrop }) => {

    const { publications } = usePublication();
    const { loading, publicationList, publicationFilter, filter } = publications;

    const returnPublications = () => {

        if (publicationList?.length > 0 && publicationFilter?.length < 1 && !filter) {
            return publicationList?.map((publication, index) => (
                <Publication publication={publication} key={index} setOpenBackDrop={setOpenBackDrop} />
            ))
        } else if (publicationFilter?.length > 0) {
            return publicationFilter?.map((publication, index) => (
                <Publication publication={publication} key={index} setOpenBackDrop={setOpenBackDrop} />
            ))
        } else {
            return <div className='border-rounded-all-10 background background-white px-4 py-3 mb-3'>
                No se encontraton coincidencias
            </div>
        }
    }

    return (
        <div>
            {loading && <>
                <SkeletonPublication />
                <SkeletonPublication />
            </>}
            {!loading && returnPublications()}
        </div>
    )
}

export { Publications }