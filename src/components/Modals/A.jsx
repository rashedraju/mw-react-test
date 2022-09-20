import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

const A = ({show, setShow, setModalItem}) => {
    const [data, setData] = useState([]);
    const [check, setCheck] = useState(false);
    const [curContactsCount, setCurContactsCount] = useState(5);
    const [query, setQuery] = useState("");

    const getAllContacts = async() => {
        await axios.get(`https://contact.mediusware.com/api/contacts/?search=${query}&page=1&page_size=${curContactsCount}`).then(res => setData(res.data.results))
    }
    useEffect(() => {
        getAllContacts();
    }, [query, curContactsCount]);

    const renderableData = () => {
        return data.filter(item => check ? item.id % 2 === 0 : true);
    }

    const handleScroll = () => {
        setCurContactsCount(prev => prev+= 5)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)    
    }

    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Modal one</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mb-3'>
                    <input type="text" onChange={handleChange} placeholder="search by phone"/>
                </div>
                <div className="d-flex justify-content-between">
                    <div>id</div>
                    <div>Contact</div>
                    <div>Country</div>
                </div>
                <div>
                    <InfiniteScroll
                        dataLength={renderableData().length}
                        next={handleScroll}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        height={"10rem"}
                        >
                        
                        {renderableData()?.map((item) => (
                            <div
                                style={style}
                                className='d-flex justify-content-between'
                                onClick={() => {
                                    setShow('modal_three');
                                    setModalItem(item);
                                }}>
                                <div>{item.id}</div>
                                <div>{item.phone}</div>
                                <div>{item.country.name}</div>
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
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
                    style={{ backgroundColor: "#46139f", color: "#fff" }}
                    onClick={() => setShow('modal_one')}>
                    All Contacts
                </Button>
                <Button
                    variant='primary'
                    onClick={() => setShow('modal_two')}
                    style={{ background: "#ff7f50", color: "#000" }}>
                    US Contacts
                </Button>
                <Button variant='primary' onClick={() => setShow(null)} style={{ background: "#fff", border: "1px solid #46139f", color: "#000" }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default A;