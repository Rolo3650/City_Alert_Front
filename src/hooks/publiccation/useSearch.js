import React from 'react'
import { usePublication } from './usePublication'
import moment from 'moment';

const useSearch = () => {

    const { publications, setPublicationsFilter } = usePublication();
    const { publicationList } = publications

    const filterPublications = (query) => {
        if (query) {
            const publicationFilter = publicationList?.filter(publication => {
                return (
                    moment(publication?.date ?? new Date()).format("DD/MM/YYYY h:mm a")?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.description?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.publication_type?.publication_type?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.settlement?.name?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    `${publication?.settlement?.pc?.id_pc}`?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.settlement?.pc?.municipality?.municipality?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.settlement?.pc?.state?.state?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.user?.email?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.user?.person?.name?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) ||
                    publication?.user?.person?.last_name?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase()) 
                )
            }
            )
            setPublicationsFilter(publicationFilter)
        } else {
            setPublicationsFilter([])
        }
    }

    return {
        filterPublications
    }
}

export { useSearch }