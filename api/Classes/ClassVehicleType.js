const VehicleTypeModel = require('../Models/ModelVehicleType')

class VehicleType {

    constructor(vehicle_type_name, vehicle_type_daily_price, vehicle_type_weekly_price, vehicle_type_monthly_price) {
        this.vehicle_type_id = ''
        this.vehicle_type_name = vehicle_type_name
        this.vehicle_type_daily_price = vehicle_type_daily_price
        this.vehicle_type_weekly_price = vehicle_type_weekly_price
        this.vehicle_type_monthly_price = vehicle_type_monthly_price
    }


    setVehicleTypeId(vehicle_type_id) {
        this.vehicle_type_id = vehicle_type_id
    }



    async save(cb) {
        const savedVehicleType = new VehicleTypeModel.vehicleTypeModel(this)

        await savedVehicleType.save((err) => {
            if (err) {
                cb({
                    response: false,
                    responseData: err.message
                })
            } else {
                cb({
                    response: true,
                    responseData: savedVehicleType
                })
            }
        })
    }


    async update(cb) {

        if (this.vehicle_type_id == '') {
            cb({
                response: false,
                responseData: "Kayıt bulunamadı"
            })
            return false
        }

        await VehicleTypeModel.vehicleTypeModel.findByIdAndUpdate(
            { _id: this.vehicle_type_id },
            this

            , (err, updatedVehicleType) => {
                if (err) {
                    cb({
                        response: false,
                        responseData: err.message
                    })
                } else {
                    cb({
                        response: true,
                        responseData: updatedVehicleType
                    })
                }
            })
    }


    async delete(cb) {
        await VehicleTypeModel.vehicleTypeModel.deleteOne({ _id: this.vehicle_type_id }, (err) => {
            if (err) {
                cb({
                    response: false,
                    responseData: err
                })
            } else {
                cb({
                    response: true,
                    responseData: "Başarılı"
                })
            }
        })
    }



}

module.exports = VehicleType