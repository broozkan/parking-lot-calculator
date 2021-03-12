import React, { Component } from 'react'
import Swal from 'sweetalert2'
import api from '../../services/api'


class FormVehicleType extends Component {

    constructor() {
        super()

        this.state = {
            vehicle_type_name: '',
            vehicle_type_daily_price: '',
            vehicle_type_weekly_price: '',
            vehicle_type_monthly_price: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

    }

    componentDidMount(){
        if(this.props.vehicle_type_id){
            this.getVehicleType()
        }        
    }

    async getVehicleType(){
        const vehicleType = await api.get(`/vehicle-types/get/${this.props.vehicle_type_id}`)
        console.log(vehicleType);
        
        this.setState(vehicleType.data)
    
    }


    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleOnSubmit(e) {
		e.preventDefault()


        let submitResponse = {}
        if(this.props.vehicle_type_id){
            submitResponse = await api.put(`/vehicle-types/${this.props.vehicle_type_id}`, this.state)
        }else{
            submitResponse = await api.post('/vehicle-types/', this.state)
        }


		if(submitResponse.data.response){
          
            Swal.fire({
				title: 'Başarılı',
				text: submitResponse.data.responseData,
				icon: 'success'
			})
			
		}else{
			Swal.fire({
				title: 'Hata',
				text: submitResponse.data.responseData,
				icon: 'error'
			})
		}

	}


    render() {
        return (
            <form class="form-horizontal" onSubmit={this.handleOnSubmit}>
                <div class="card-body">
                    <h4 class="card-title">Araç Tipi Formu</h4>
                    <div class="form-group row">
                        <label for="vehicle_type_name" class="col-sm-3 text-end control-label col-form-label">Araç Tipi Adı</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" onChange={this.handleOnChange} value={this.state.vehicle_type_name} name="vehicle_type_name" id="vehicle_type_name" placeholder="Araç tipi adı giriniz" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="vehicle_type_daily_price" class="col-sm-3 text-end control-label col-form-label">Günlük Ücreti</label>
                        <div class="col-sm-9">
                            <input type="number" step=".01" class="form-control" onChange={this.handleOnChange} value={this.state.vehicle_type_daily_price} name="vehicle_type_daily_price" id="vehicle_type_daily_price" placeholder="Günlük ücret giriniz" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="vehicle_type_weekly_price" class="col-sm-3 text-end control-label col-form-label">Haftalık Ücreti</label>
                        <div class="col-sm-9">
                            <input type="number" step=".01" class="form-control" onChange={this.handleOnChange} value={this.state.vehicle_type_weekly_price} name="vehicle_type_weekly_price" id="vehicle_type_weekly_price" placeholder="Haftalık ücret giriniz" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="vehicle_type_monthly_price" class="col-sm-3 text-end control-label col-form-label">Aylık Ücreti</label>
                        <div class="col-sm-9">
                            <input type="number" step=".01" class="form-control" onChange={this.handleOnChange} value={this.state.vehicle_type_monthly_price} name="vehicle_type_monthly_price" id="vehicle_type_monthly_price" placeholder="Haftalık ücret giriniz" />
                        </div>
                    </div>
                </div>
                <div class="border-top">
                    <div class="card-body">
                        <button type="submit" class="btn btn-primary">Kaydet</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default FormVehicleType