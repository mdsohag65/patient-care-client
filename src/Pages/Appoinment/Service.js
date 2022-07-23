import React from 'react';
import CommonBtn from '../Shared/CommonBtn';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <section>
            <div class="card w-96 bg-base-100 shadow-xl mx-7">
                <div class="card-body">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-400'>No Service Available</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center">
                        <CommonBtn>Book Appointment</CommonBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;