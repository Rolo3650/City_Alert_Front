import React from 'react'
import { NewPublication } from '../../publication/modules/NewPublication'
import { HandlerSteps } from '../../../components/publication/newPublication/HandlerStpes'

const NewPublicationModal = () => {
    return (
        <div className="modal fade" id="newPublication" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Publicación</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5">
                        <NewPublication />
                    </div>
                    <div className="modal-footer">
                        <HandlerSteps />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NewPublicationModal }