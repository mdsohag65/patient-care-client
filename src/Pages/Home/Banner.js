import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import CommonBtn from '../Shared/CommonBtn';

const Banner = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: "cover"
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='m-6'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here!</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the.</p>
                        <Link to="/appointment"><CommonBtn>GET STARTED</CommonBtn></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;