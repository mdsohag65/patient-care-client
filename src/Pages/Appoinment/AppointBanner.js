import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';

const AppointBanner = ({ date, setDate }) => {

    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl m-5" alt='' />
                    <div className='m-5'>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointBanner;