import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  clickCounter = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <Card style={{ width: '18rem' }} id='card'>
        <Card.Body>
          <Card.Title className='card-text'>{this.props.title}</Card.Title>
          <Card.Text className='card-text'>{this.props.description}</Card.Text>
          <Card.Text className='card-text'>❤️: {this.state.clicks}</Card.Text>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.clickCounter}
            roundedCircle
            style={{ width: '18rem' }}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
