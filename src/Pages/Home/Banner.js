import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: "cover"
        }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='m-6'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here!</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the.</p>
                        <Link to="/appointment"><button class="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;