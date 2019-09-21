import * as React from 'react';

import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import Information from './Information';

import * as DoctorContext from '../Doctor.context';

const docId = 1;
const dom = <Information id="1" />;

const contextValues = [{"id":1,"name":"Hibbert, Julius","email":"kriger@notablehealth.com"},{"id":2,"name":"Krieger, Algemap","email":"kriger@notablehealth.com"},{"id":3,"name":"Riviera, Nick","email":"kriger@notablehealth.com"}];
const doc = contextValues[docId];

jest.spyOn(DoctorContext, 'useDoctorContext')
    .mockImplementation(() => contextValues);

describe('Unit tests for Information', () => {
    it('Renders', () => {
        shallow(dom)
    })

    it('Renders with snapshot', () => {
        const wrapper = shallow(dom);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    })

    it('It renders with the correct props', () => {
        const wrapper = shallow(dom);
        const name = wrapper.find('h1').text();
        const email = wrapper.find('h3').text();
        expect(doc.name).toEqual(name);
        expect(doc.email).toEqual(email);
    })
})