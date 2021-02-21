import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Ingredients(props) {

    const { drinks } = props;

    return (
      <Modal
        {...props}
        className="moody"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cocktail Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
            className="modal-body"
        >
          <h4>List Of Igredients</h4>
          {drinks.map((drink) => {
            return(
                <>
                <ul className="ingredients-container">
                    <li className="ingredient">{drink.strIngredient1}</li>
                </ul>
                </>
            )
        })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  