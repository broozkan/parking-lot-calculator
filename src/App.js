import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ListVehicleTypesView from './views/VehicleTypes/ListVehicleTypesView';
import NewVehicleTypesView from './views/VehicleTypes/NewVehicleTypesView';
import UpdateVehicleTypesView from './views/VehicleTypes/UpdateVehicleTypesView';

function App() {
  return (
    <div className="App">
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <Router>
          <Header />
          <Sidebar />
          <div className="page-wrapper">
            <div className="container-fluid">
              <Switch>
                <Route path="/araclar/" exact component={ListVehicleTypesView}></Route>
                <Route path="/araclar/yeni/" exact component={NewVehicleTypesView}></Route>
                <Route path="/araclar/duzenle/:vehicleTypeId" component={UpdateVehicleTypesView}></Route>
              </Switch>
            </div>

          </div>

        </Router>
      </div>

    </div>
  );
}

export default App;
