import React from 'react';

class ImgUrl extends React.Component {
  render() {
    return (
      <div>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`} alt='' />
      </div>
    );
  }
}
export default ImgUrl;
