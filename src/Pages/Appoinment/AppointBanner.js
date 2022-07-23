import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You have selected: <span className='text-primary'>{format(date, 'PP')}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointBanner;