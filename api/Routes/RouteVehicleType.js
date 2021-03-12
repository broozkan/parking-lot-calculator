const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const VehicleType = require('../Classes/ClassVehicleType')
const VehicleTypeModel = require('../Models/ModelVehicleType')


// get reservation list
router.get('/:page', async (req, res) => {

    if (req.query) {
        if (req.query._id) {
            req.query._id = mongoose.Types.ObjectId(req.query._id)
        }
    }

    const aggregate = VehicleTypeModel.vehicleTypeModel.aggregate([{
        $match: req.query
    }])


    const options = {
        page: req.params.page,
        limit: 25
    }

    VehicleTypeModel.vehicleTypeModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})


// get specific reservation
router.get('/get/:vehicleTypeId', async (req, res) => {
    VehicleTypeModel.vehicleTypeModel.findById(req.params.vehicleTypeId, (err, result) => {
        res.send(result)
    })
})


router.post('/', async (req, res) => {


    const vehicleType = new VehicleType(
        req.body.vehicle_type_name,
        req.body.vehicle_type_daily_price,
        req.body.vehicle_type_weekly_price,
        req.body.vehicle_type_monthly_price
    )


    vehicleType.save((result) => {
        res.send(result)
    })

})


router.put('/:vehicleTypeId', async (req, res) => {


    const vehicleType = new VehicleType(
        req.body.vehicle_type_name,
        req.body.vehicle_type_daily_price,
        req.body.vehicle_type_weekly_price,
        req.body.vehicle_type_monthly_price
    )

    await vehicleType.setVehicleTypeId(req.params.vehicleTypeId)

    await vehicleType.update((result) => {
        res.send(result)
    })


})


router.delete('/:vehicleTypeId', async (req, res) => {

    const vehicleType = new VehicleType

    await vehicleType.setVehicleTypeId(req.params.vehicleTypeId)

    await vehicleType.delete((result) => {
        res.send(result)
    })

})


module.exports = router;