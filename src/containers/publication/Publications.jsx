import React, { useEffect } from 'react'
import { usePublication } from '../../hooks/publiccation/usePublication'
import { SkeletonPublication } from '../../components/publication/SkeletonPublication';
import { Publication } from '../../components/publication/Publication';

const Publications = () => {

    const { publications } = usePublication();
    const { loading, publicationList } = publications;

    const returnPublications = () => {

        if (publicationList?.length > 0) {
            return publicationList?.map((publication, index) => (
                <Publication publication={publication} key={index} />
            ))
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