import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  clickCounter = () => {
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img
          src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.clickCounter}
        ></img>
        <h3>❤️: {this.state.clicks}</h3>
      </>
    );
  }
}

export default HornedBeast;
