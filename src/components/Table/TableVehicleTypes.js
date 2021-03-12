
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import api from '../../services/api'
import Pagination from '../Pagination/Pagination'

class TableVehicleTypes extends Component {

    constructor() {
        super()

        this.state = {
            vehicle_types: [],
            pagination_info: [],
            is_vehicle_types_loaded: false
        }
        this.handleOnDelete = this.handleOnDelete.bind(this)
    }


    componentDidMount() {
        this.getVehicleTypes()
    }


    getVehicleTypes = async (page = 1, filters = {}) => {
        this.setState({
            is_vehicle_types_loaded: false
        })


        const vehicleTypes = await api.get(`/vehicle-types/${page}`, { params: filters })
        this.setState({
            vehicle_types: vehicleTypes.data.docs,
            pagination_info: vehicleTypes.data,
            is_vehicle_types_loaded: true
        })

    }



    async handleOnDelete(e) {


        e.preventDefault()

        const submitResponse = await api.delete(`/vehicle-types/${e.target.dataset.vehicle_type_id}`)

        if (submitResponse.data.response) {
            Swal.fire({
                title: "Başarılı",
                text: 'Araç tipi silindi',
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: "Hata!",
                text: submitResponse.data.responseData,
                icon: 'error'
            })
        }

    }



    render() {

        // render vehicle types
        let vehicleTypesJsx = ''
        if (this.state.is_vehicle_types_loaded) {
            vehicleTypesJsx = this.state.vehicle_types.map((item) => {

                return (
                    <tr>
                        <td>{item.vehicle_type_name}</td>
                        <td>{item.vehicle_type_daily_price}</td>
                        <td>{item.vehicle_type_weekly_price}</td>
                        <td>{item.vehicle_type_monthly_price}</td>
                        <td class="options" style={{ width: '5%', textAlign: 'center' }}>
                            <a href={`/araclar/duzenle/${item._id}`} >Düzenle</a>
                            <a href="#" onClick={this.handleOnDelete} style={{marginLeft: '1rem'}} data-vehicle_type_id={item._id}>Sil</a>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <>
                <table class="table table-striped cart-list">
                    <thead>
                        <tr>
                            <th>Araç Tipi Adı</th>
                            <th>Günlük Ücret</th>
                            <th>Haftalık Ücret</th>
                            <th>Aylık Ücret</th>
                            <th>İŞLEM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleTypesJsx}

                    </tbody>
                </table>
            </>
        )
    }

}

export default TableVehicleTypes