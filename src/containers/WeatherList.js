import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/googleMap';
class WeatherList extends Component {

    renderWeatherList(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        console.log(temps);
        return (
            <tr key= {name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td> 
                  <Chart data={temps} color="Red" units="K" />
                </td>
                <td> 
                  <Chart data={pressures} color="Green" units="hPa" />
                </td>
                <td> 
                  <Chart data={humidities} color="Black" units="%" />
                </td>
            </tr>
        )
    }

    render () {
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature(K)</th>
                            <th>Pressure(hPA)</th>
                            <th>Humidity(%)</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeatherList)}
                    </tbody>
                  
                </table>
        )
    }
}


function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);