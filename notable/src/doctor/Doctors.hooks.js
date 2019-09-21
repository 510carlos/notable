import { useEffect, useState } from 'react';
import { getDoctors } from './Doctors.helpers';

const GetDoctorsList = () => {
    const [doctorsList, setDoctors] = useState([]);

    useEffect(() => {
        let mounted = true;

        getDoctors().then( ({data}) => {
            if(mounted) {
                setDoctors(data)
            }
        });
        return () => {
            mounted = false;
        };
    }, []);
    return doctorsList;
}

const StoreDocID = () => {
    const [docId, setId] = useState(-1);

    useEffect(() => {
        let mounted = true;

        if (mounted)
            setId(-1)

        return () => {
            mounted = false;
        };
    }, [docId]);
    return [docId, setId]
}

export { GetDoctorsList, StoreDocID };