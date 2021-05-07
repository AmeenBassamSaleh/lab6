import React from 'react';

export class MovData extends React.Component {
  render() {
    console.log(this.props.mov);
    return (
      this.props.mov.data.map((a, index) => {
        return (
          <div key={index}>
            <p>{a.dataMovi} {a.overview} {a.poster_path}</p>
            {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`} alt='' /> */}

          </div>
        );
      })
    );
  }
}

export default MovData;
