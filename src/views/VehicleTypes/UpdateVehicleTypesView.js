import React from 'react'
import { useRouteMatch } from 'react-router'
import FormVehicleType from '../../components/Form/FormVehicleType'


const UpdateVehicleTypesView = () => {

    const match = useRouteMatch()

    console.log(match);
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <FormVehicleType vehicle_type_id={match.params.vehicleTypeId} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateVehicleTypesView