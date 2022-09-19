import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from 'react-router-dom';

const Problem2 = () => {
    const [show, setShow] = useState();
    const [check, setCheck] = useState(false);
    const [modalItem, setModalItem] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const [contacts, setContacts] = useState([
        {
            id: 1,
            phone: '0128552585636354',
            country: 'US',
        },
        {
            id: 2,
            phone: '565644565342145',
            country: 'EU',
        },
        {
            id: 3,
            phone: '46543536645645',
            country: 'US',
        },
        {
            id: 4,
            phone: '56456456385463',
            country: 'BN',
        },
        {
            id: 6,
            phone: '45456456456456',
            country: 'US',
        },
    ]);

    const getContacts = () => {
        let renderableContact = null;
        if (show === 'modal_one') {
            renderableContact = contacts;
        } else if (show === 'modal_two') {
            renderableContact = contacts.filter(
                (item) => item.country === 'US'
            );
        }

        if (check) {
            renderableContact = renderableContact.filter(
                (item) => item.id % 2 === 0
            );
        }

        return renderableContact;
    };

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className='d-flex justify-content-center gap-3'>
                    <button
                        className='btn btn-lg btn-outline-primary'
                        type='button'
                        onClick={() => {
                            setSearchParams({
                                modal: 'one',
                            });
                            setShow('modal_one');
                        }}>
                        All Contacts
                    </button>
                    <button
                        className='btn btn-lg btn-outline-warning'
                        type='button'
                        onClick={() => {
                            setSearchParams({
                                modal: 'two',
                            });
                            setShow('modal_two');
                        }}>
                        US Contacts
                    </button>
                </div>
            </div>
            <>
                <Modal show={show === 'modal_one'}>
                    <Modal.Header>
                        <Modal.Title>Modal one</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>Contact</th>
                                    <th scope='col'>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getContacts()?.map((item) => (
                                    <tr
                                        onClick={() => {
                                            setShow('modal_three');
                                            setModalItem(item);
                                        }}>
                                        <td>{item.id}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form.Label>Only even</Form.Label>
                        <Form.Check
                            checked={check}
                            aria-label='Only even'
                            onClick={() => setCheck((prev) => !prev)}
                        />
                        <Button
                            variant='secondary'
                            onClick={() => setShow('modal_one')}>
                            All Contacts
                        </Button>
                        <Button
                            variant='primary'
                            onClick={() => setShow('modal_two')}>
                            US Contacts
                        </Button>
                        <Button variant='primary' onClick={() => setShow(null)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show === 'modal_two'}>
                    <Modal.Header>
                        <Modal.Title>Modal two</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>Contact</th>
                                    <th scope='col'>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getContacts()?.map((item) => (
                                    <tr
                                        onClick={() => {
                                            setShow('modal_three');
                                            setModalItem(item);
                                        }}>
                                        <td>{item.id}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form.Label>Only even</Form.Label>
                        <Form.Check
                            checked={check}
                            aria-label='Only even'
                            onClick={() => setCheck((prev) => !prev)}
                        />
                        <Button
                            variant='secondary'
                            onClick={() => setShow('modal_one')}>
                            All Contacts
                        </Button>
                        <Button
                            variant='primary'
                            onClick={() => setShow('modal_two')}>
                            US Contacts
                        </Button>
                        <Button variant='primary' onClick={() => setShow(null)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show === 'modal_three'}>
                    <Modal.Header>
                        <Modal.Title>Modal Three</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>Contact</th>
                                    <th scope='col'>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modalItem && (
                                    <tr>
                                        <td>{modalItem.id}</td>
                                        <td>{modalItem.phone}</td>
                                        <td>{modalItem.country}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form.Label>Only even</Form.Label>
                        <Form.Check
                            checked={check}
                            aria-label='Only even'
                            onClick={() => setCheck((prev) => !prev)}
                        />
                        <Button
                            variant='secondary'
                            onClick={() => setShow('modal_one')}>
                            All Contacts
                        </Button>
                        <Button
                            variant='primary'
                            onClick={() => setShow('modal_two')}>
                            US Contacts
                        </Button>
                        <Button variant='primary' onClick={() => setShow(null)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default Problem2;
