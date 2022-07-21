import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import DentalService from './DentalService';
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 3,
            img: whitening,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='uppercase text-xl text-secondary font-bold'>Our Services</h2>
                <h1 className='text-4xl mb-6'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-7'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='px-24'>
                <Link to='/appointment'><DentalService></DentalService></Link>
            </div>
        </div>
    );
};

export default Services;