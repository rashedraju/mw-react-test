import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [formData, setFormData] = useState({
        name: '',
        status: '',
    });

    const [data, setData] = useState({
        active: [],
        completed: [],
        others: [],
    });

    const handleClick = (val) => {
        setShow(val);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.status === 'active' || formData.status === 'Active') {
            setData((prev) => ({
                ...prev,
                active: [...prev.active, formData],
            }));
        } else if (
            formData.status === 'completed' ||
            formData.status === 'Completed'
        ) {
            setData((prev) => ({
                ...prev,
                completed: [...prev.completed, formData],
            }));
        } else {
            setData((prev) => ({
                ...prev,
                others: [...prev.others, formData],
            }));
        }

        setFormData({
            name: '',
            status: '',
        });
    };

    const getRenderableList = () => {
        let renderableList = null;
        if (show === 'all') {
            renderableList = [
                ...data.active,
                ...data.completed,
                ...data.others,
            ];
        } else if (show == 'active') {
            renderableList = data.active;
        } else if (show === 'completed') {
            renderableList = data.completed;
        }

        return renderableList;
    };

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className='col-6 '>
                    <form
                        className='row gy-2 gx-3 align-items-center mb-4'
                        onSubmit={handleSubmit}>
                        <div className='col-auto'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-auto'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Status'
                                name='status'
                                value={formData.status}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-auto'>
                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-8'>
                    <ul
                        className='nav nav-pills mb-3'
                        id='pills-tab'
                        role='tablist'>
                        <li className='nav-item'>
                            <button
                                className={`nav-link ${
                                    show === 'all' && 'active'
                                }`}
                                type='button'
                                onClick={() => handleClick('all')}>
                                All
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button
                                className={`nav-link ${
                                    show === 'active' && 'active'
                                }`}
                                type='button'
                                onClick={() => handleClick('active')}>
                                Active
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button
                                className={`nav-link ${
                                    show === 'completed' && 'active'
                                }`}
                                type='button'
                                onClick={() => handleClick('completed')}>
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className='tab-content'></div>
                    <table className='table table-striped '>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getRenderableList()?.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
