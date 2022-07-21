import React from 'react';
import appointment from '../../assets/images/appointment.png';
import CommonBtn from '../Shared/CommonBtn';

const Contact = () => {
    return (
        <section className='text-center p-10' style={{
            background: `url(${appointment})`
        }}>
            <div>
                <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='mt-[41px]'>
                <form className=''>
                    <input className='w-[450px] h-[48px] rounded-lg p-4 ' type="email" name="email" id="" placeholder='Your Email' />
                    <br />
                    <br />
                    <input className='w-[450px] h-[48px] rounded-lg p-4' type="subject" name="subject" id="" placeholder='Subject' />
                    <br />
                    <br />
                    <textarea className='w-[450px] rounded-lg p-4 mb-4' type="message" name="message" id="" placeholder='Your Message' />
                    <br />
                    <CommonBtn>Submit</CommonBtn>
                </form>
            </div>
        </section>
    );
};

export default Contact;