import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;