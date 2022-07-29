import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      selectedBeast: {},
      beastData: data,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = (selectedBeastTitle) => {
    const selectedBeast = data.find(
      (beast) => beast.title === selectedBeastTitle
    );
    this.setState({ showModal: true, selectedBeast });
  };

  hornFilter = (e) => {
    const numHorns = e.target.value;
    console.log(numHorns);
    let newData;
    if (numHorns === 'all') {
      this.setState({ beastData: data });
    } else if (numHorns === '1') {
      newData = data.filter((beast) => beast.horns === 1);
      this.setState({ beastData: newData });
    } else if (numHorns === '2') {
      newData = data.filter((beast) => beast.horns === 2);
      this.setState({ beastData: newData });
    } else if (numHorns === '3') {
      newData = data.filter((beast) => beast.horns === 3);
      this.setState({ beastData: newData });
    } else if (numHorns === '100') {
      newData = data.filter((beast) => beast.horns === 100);
      this.setState({ beastData: newData });
    } else {
      this.setState({ beastData: data });
    }
  };

  render() {
    return (
      <Container className='App'>
        <Header />
        <Container>
          <Form>
            <Form.Group className='mb-4'>
              <Form.Label>Filter by Number of Horns</Form.Label>
              <Form.Select onChange={this.hornFilter}>
                <option value='all'>All</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
        <Main data={this.state.beastData} openModal={this.openModal} />
        <SelectedBeast
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
