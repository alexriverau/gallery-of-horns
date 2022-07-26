import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
          {this.props.data.map((beast) => (
            <Col>
              <HornedBeast
                title={beast.title}
                description={beast.description}
                image_url={beast.image_url}
                openModal={this.props.openModal}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
