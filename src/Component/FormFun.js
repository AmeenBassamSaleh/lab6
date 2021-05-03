import React from 'react';
// import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import ImgUrl from 'ImgUrl';

export class FormFun extends React.Component {

  //   const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.SQUrl}&format=json`;


  render() {
    return (
      <div>
        {/* <h1>City Exploder</h1>
        <form onSubmit={this.props.urlLocation}>
          <input onChange={this.props.updateUrl} type='text' placeholder='city name' />
          <input type="submit" value='get city' />
        </form>
        <p>
          {this.props.data}
        </p>
        <br /> */}
        {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`} alt='' /> */}

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div >
    );
  }
}

export default FormFun;
