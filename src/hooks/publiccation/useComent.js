import React from 'react'
import { useApi } from '../api/useApi'
import { ADD_COMENT } from '../../api/publication/publication'
import Swal from 'sweetalert2'
import { usePublication } from './usePublication'

const useComent = () => {

    const { publications, setPublicationsList } = usePublication()
    const { publicationList } = publications
    const apiAddComent = useApi(ADD_COMENT)

    const setPublicationsComent = (coment) => {

        let publicationsNewList = publicationList

        publicationsNewList?.find(publication => (
            coment.id_publication == publication.id_publication
        ))?.coments?.unshift(coment)

        setPublicationsList(publicationsNewList)

    }

    const addComent = async (coment) => {
        const response = await apiAddComent.request(coment)

        if (response.ok) {
            Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).fire({
                icon: 'success',
                title: 'Comentario Agregado',
                text: 'El comentario ha sido agregado correctamente.'
            })
            return response.coment
        } else {
            Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).fire({
                icon: 'error',
                title: 'Comentario no agregado',
                text: 'El comentario no ha sido agregado correctamente.'
            })
            return false
        }
    }

    return {
        addComent,
        setPublicationsComent
    }
}

export { useComent }