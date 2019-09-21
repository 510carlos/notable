import React, { useEffect, useState } from 'react';
import { getApointment } from './Doctors.helpers';
import { Apointments, Information } from './components';

const Doctor = ({match}) => {
    const id = match.params.id || -1;

    const [apt, setApt] = useState([]);

    useEffect( () => {
        let mounted = true;
        getApointment(id).then( result => {
        const { data } = result;
        if (mounted)
            setApt(data)
        });
        return () => {
            mounted = false;
        }
    }, [id]);

    return (
        <>
            <Information id={id} />
            <Apointments apt={apt} />
        </>
    )
}

export default Doctor;