import React from 'react';
import { useDoctorContext } from '../Doctor.context';


const Information = ({id}) => {
    const doctorsList = useDoctorContext();
    let doctor = {
        "name": "n/a",
        "email": "n/a"
    };
    if(doctorsList && doctorsList[id])
        doctor = doctorsList[id];

    return (
        <>
            <h1>{doctor.name}</h1>
            <h3>{doctor.email}</h3>
        </>
    )
};

export default Information;