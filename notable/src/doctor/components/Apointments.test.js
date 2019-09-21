import { shallow, mount } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import * as React from 'react';

import Apointments from './Apointments';

const props = [{"key":"1","name":"3 Sterling Archer","time":"8:00AM","kind":"New Patient"},{"key":"2","name":"Cyril Figis","time":"8:30AM","kind":"Follow Up"},{"key":"3","name":"Ray Gillete","time":"9:00AM","kind":"Follow Up"},{"key":"4","name":"Lana Kane","time":"9:30AM","kind":"New Patient"},{"key":"5","name":"Pam Poovey","time":"10:00AM","kind":"New Patient"}];

const dom = <Apointments {...props} />

describe('Unit tests for Apointments component', () => {
    it('Renders', () => {
        shallow(dom);
    })

    it('Renders with snapshot', () => {
        const wrapper = shallow(dom);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    })
})