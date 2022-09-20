import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const C = ({show, setShow, modalItem}) => {
    return (
        <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Modal Three</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>Phone</th>
                                    <th scope='col'>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modalItem && (
                                    <tr>
                                        <td>{modalItem.id}</td>
                                        <td>{modalItem.phone}</td>
                                        <td>{modalItem.country.name}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            style={{ backgroundColor: "#46139f", color: "#fff" }}
                            variant='secondary'
                            onClick={() => setShow('modal_one')}>
                            All Contacts
                        </Button>
                        <Button
                            style={{ background: "#ff7f50", color: "#000" }}
                            variant='primary'
                            onClick={() => setShow('modal_two')}>
                            US Contacts
                        </Button>
                        <Button variant='primary' onClick={() => setShow(null)} style={{ background: "#fff", border: "1px solid #46139f", color: "#000" }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
    )
}

export default C;