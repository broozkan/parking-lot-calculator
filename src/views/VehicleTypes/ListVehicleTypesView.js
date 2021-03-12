import React from 'react'
import FormVehicleType from '../../components/Form/FormVehicleType'
import TableVehicleTypes from '../../components/Table/TableVehicleTypes'


const ListVehicleTypesView = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <TableVehicleTypes />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ListVehicleTypesView