import React from 'react'
import FormVehicleType from '../../components/Form/FormVehicleType'


const NewVehicleTypesView = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">

                            <FormVehicleType />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default NewVehicleTypesView