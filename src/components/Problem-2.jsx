import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from 'react-router-dom';
import ModalA from './Modals/A'
import ModalB from './Modals/B'
import ModalC from './Modals/C'

const Problem2 = () => {
    const [show, setShow] = useState();
    const [check, setCheck] = useState(false);
    const [modalItem, setModalItem] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const [contacts, setContacts] = useState([]);

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
                        className='btn'
                        style={{ backgroundColor: "#46139f", color: "#fff" }}
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
                        className='btn'
                        type='button'
                        style={{ background: "#ff7f50", color: "#000" }}
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
                
                <ModalA show={show === 'modal_one'} setShow={setShow} setModalItem={setModalItem} />
                <ModalB show={show === 'modal_two'} setShow={setShow} setModalItem={setModalItem} />
                <ModalC show={show === 'modal_three'} setShow={setShow} modalItem={modalItem} />
            </>
        </div>
    );
};

export default Problem2;
