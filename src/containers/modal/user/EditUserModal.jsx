import React from 'react'
import { EditUserForm } from '../../user/edit/EditUserForm'
import { HandlerSteps } from '../../../components/editUser/HandlerStpes'

const EditUserModal = ({ getUser }) => {
    return (
        <div className="modal fade" id="editUser" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5">
                        <EditUserForm />
                    </div>
                    <div className="modal-footer">
                        <HandlerSteps getUser={getUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EditUserModal }