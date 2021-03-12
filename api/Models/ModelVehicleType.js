const mongoose = require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")

const vehicleTypeSchema = mongoose.Schema({
    vehicle_type_name: {
        type: String,
        required: true
    },
    vehicle_type_daily_price: {
        type: String,
        required: true
    },
    vehicle_type_weekly_price: {
        type: String,
        required: true
    },
    vehicle_type_monthly_price: {
        type: String,
        required: true
    }
})

vehicleTypeSchema.plugin(aggregatePaginate);


module.exports.vehicleTypeSchema = vehicleTypeSchema
module.exports.vehicleTypeModel = mongoose.model('VehicleType', vehicleTypeSchema)