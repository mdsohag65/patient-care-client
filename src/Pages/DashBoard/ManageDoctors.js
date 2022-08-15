import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://limitless-mountain-82756.herokuapp.com/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <div>
            <h2 className="text-xl text-secondary font-semibold">Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDoctors={setDoctors}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConfirmModal
                deleteDoctor={deleteDoctor}
                setDeleteDoctor={setDeleteDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;