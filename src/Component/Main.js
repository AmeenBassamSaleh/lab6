import React from 'react';
import axios from 'axios';
// import ImgUrl from 'ImgUrl';
import FormFun from './FormFun';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SQUrl: '',
      data: '',
      show: false
    };
  }

  urlLocation = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.d90f234971c4a2b3939403bad7bbd862&q=${this.state.SQUrl}&format=json`;

    const dataAxios = await axios.get(url);
    this.setState({
      data: dataAxios.data[0],
      show: true
    });
    console.log(this.state);
  };

  updateUrl = (e) => {
    this.setState({ SQUrl: e.target.value });
    console.log(this.state.SQUrl);
  }

  render() {
    return (
      <div>
        <FormFun data={this.state.data.display_name} updateUrl={this.updateUrl} urlLocation={this.urlLocation}/>
      </div >
    );
  }
}

export default App;

