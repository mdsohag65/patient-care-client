import React from 'react';

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt='' />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-outline btn-warning">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;