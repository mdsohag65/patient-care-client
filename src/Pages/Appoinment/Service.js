import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl mx-7">
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-400'>No Service Available</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            for="booking-modal" className="bg-gradient-to-r from-secondary to-primary btn
                            border-none text-white shadow-xl">BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;