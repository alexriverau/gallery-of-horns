import React from 'react';
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
      <Card
        style={{ width: '16rem' }}
        id='card'
        className='h-100'
      >
        <Card.Body>
          <Card.Title className='card-text'>{this.props.title}</Card.Title>
          <Card.Text className='card-text'>{this.props.description}</Card.Text>
          <Card.Text onClick={this.clickCounter} className='card-text'>❤️: {this.state.clicks}</Card.Text>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title}
            onClick={()=> this.props.openModal(this.props.title)}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
