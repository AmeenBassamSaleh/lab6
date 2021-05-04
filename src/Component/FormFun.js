import React from 'react';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import ImgUrl from 'ImgUrl';

export class FormFun extends React.Component {

  //   const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.SQUrl}&format=json`;


  render() {
    return (
      <div>
        <h1>City Exploder</h1>
        <form onSubmit={this.props.urlLocation}>
          <input onChange={this.props.updateUrl} type='text' placeholder='city name' />
          <input type="submit" value='get city' />
        </form>
        <br />
        {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`} alt='' /> */}

        {/* <Form onSubmit={this.props.urlLocation}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            City Exploder
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="city name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onChange={this.props.updateUrl} value='get city'>get city Info</Button>
            </Col>
          </Form.Group>
        </Form> */}
        {/* <p>
          {this.props.data}
        </p> */}
      </div >
    );
  }
}

export default FormFun;
