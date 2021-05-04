import React from 'react';

export class WeatherData extends React.Component {
  render() {
    console.log('weather');
    return (
      this.props.test.map((i, index) => {
        return (
          <div key={index}>
            <p>{i.description} {i.date}</p>
          </div>
        );
      })
    );
  }
}

export default WeatherData;

