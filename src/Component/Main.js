import React from 'react';
import axios from 'axios';
import ImgUrl from './ImgUrl';
import FormFun from './FormFun';
import WeatherData from './WeatherData';
import MovData from './MovData';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SQUrl: '',
      data: '',
      show: false,
      hammoda: {},
      movieRender: {},
      myApiUrl: process.env.REACT_APP_MY_API_URL,
      myKey: process.env.REACT_APP_LOCATION_API_KEY,
      REACT_APP_MOVIE_API_KE: process.env.REACT_APP_MOVIE_API_KE,
      BackEndUrl: 'https://weatherasac.herokuapp.com/'
    };
  }

  urlLocation = async (e) => {
    e.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${this.state.myKey}&q=${this.state.SQUrl}&format=json`;
      const dataAxios = await axios.get(url); // from bake end res.send(arrayOf);

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////

      let lat = dataAxios.data[0].lat;
      let lon = dataAxios.data[0].lon;

      let taName = 'fadi';

      console.log(lat, lon);

      const weatherDateApi = await axios.get(this.state.BackEndUrl + `weather?lat=${lat}&lon=${lon}&name=${taName}`);

      // console.log(weatherDateApi.data);
      // console.log(this.state.data);

      //////////////////////////////////////////////////////////////////////////////////////////////

      // let movieApi = `${this.state.REACT_APP_MOVIE_API_KE} &query=amman`;

      // console.log(movieApi);

      const arrayOfMoviAxios = await axios.get(this.state.BackEndUrl + `movies?query=${this.state.SQUrl}`);

      // console.log(arrayOfMoviAxios);

      // (dataAxios => {
      // console.log(dataAxios.data[0].lat);

      // axios.get(this.state.BackEndUrl + `/wather?lat=${dataAxios.data[0].lat}$lon=${dataAxios.data[0].lon}`).then(weatherDataApi => {
      // console.log(weatherDataApi);
      // });
      // });
      // http://localhost:4445/weather?lat=${dataAxios.data[0].lat}&lon=${dataAxios.data[0].lon}
      // const expressWeatherUrl = `${this.state.myApiUrl}weather`;
      // const expressReq = await axios.get(expressWeatherUrl);
      // urlLocation = async (e) => {
      // e.preventDefault();
      // try {
      // const url = `https://us1.locationiq.com/v1/search.php?key=${this.state.myKey}&q=${this.state.SQUrl}&format=json`;

      // const expressWeatherUrl = `${this.state.myApiUrl}weather`;
      // const expressReq = await axios.get(expressWeatherUrl);

      // const dataAxios = await axios.get(url);

      // console.log(expressReq.data);

      /////////////////////////////////////////////////////////////////////////////////////////////////

      this.setState({
        data: dataAxios.data[0],
        show: true,
        hammoda: weatherDateApi.data,
        movieRender: arrayOfMoviAxios
      });
      console.log(this.state.movieRender);

    } catch (error) {
      console.log('not working');
      console.log(error);
      // console.log('not working2');
    }
  };

  updateUrl = (e) => {
    this.setState({ SQUrl: e.target.value });
    console.log(this.state.SQUrl);
  }

  render() {
    return (
      <div>
        <FormFun data={this.state.data.display_name} updateUrl={this.updateUrl} urlLocation={this.urlLocation} />
        {this.state.show &&
          <>
            <ImgUrl data={this.state.data} date={this.state.data.display_name} />

            <WeatherData test={this.state.hammoda} />

            <MovData mov={this.state.movieRender} />
          </>
        }
      </div >
    );
  }
}

export default App;

//weather={this.state.hammoda}
