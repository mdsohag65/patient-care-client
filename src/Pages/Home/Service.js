import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-28 h-28 rounded-xl' src={service.img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;