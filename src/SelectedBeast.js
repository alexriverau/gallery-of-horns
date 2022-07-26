import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        size='sm'
        show={this.props.showModal}
        onHide={this.props.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.selectedBeast.description}
          <Image
            style={{ width: '16rem' }}
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.description}
          ></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
