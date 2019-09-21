import { createContext, useContext } from 'react';

export const useDoctorContext = () => useContext(DoctorContext);
const defaultValues = [];
const DoctorContext = createContext(defaultValues);

export default DoctorContext;

