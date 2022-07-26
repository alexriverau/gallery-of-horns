import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      selectedBeast: {
        title: 'title',
        description: 'description',
        image_url: 'image_url',
      },
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = (title, description, image_url) => {
    this.setState({
      showModal: true,
      selectedBeast: {
        title: title,
        description: description,
        image_url: image_url,
      },
    });
  };

  render() {
    return (
      <Container className='App'>
        <Header />
        <Main data={this.state.data} openModal={this.openModal} />
        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          selectedBeast={this.state.selectedBeast}
          closeModal={this.closeModal}
        />
      </Container>
    );
  }
}

export default App;
