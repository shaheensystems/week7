
function WeatherInfo(props){

    return(
        <div>
            <button onClick={()=> props.setWeatherInfo("Cloudy")}>Set weather to Cloudy</button>
        </div>
    );

}
export default WeatherInfo; 