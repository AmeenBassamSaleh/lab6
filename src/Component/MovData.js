import React from 'react';

export class MovData extends React.Component {
  render() {
    console.log(this.props.mov);
    return (
      this.props.mov.data.map((a, index) => {
        return (
          <div key={index}>
            <p>{a.dataMovi} {a.overview}</p>

            <img src={`https://image.tmdb.org/t/p/original${a.poster_path}`} alt=''/>

          </div>
        );
      })
    );
  }
}

export default MovData;
