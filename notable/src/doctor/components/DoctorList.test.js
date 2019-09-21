import * as React from 'react';

import { shallow, mount } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import DoctorList from './DoctorList';

import { Menu } from 'antd';

import * as DoctorContext from '../Doctor.context';

const dom = <DoctorList />;

const contextValues = [{"id":1,"name":"Hibbert, Julius","email":"kriger@notablehealth.com"},{"id":2,"name":"Krieger, Algemap","email":"kriger@notablehealth.com"},{"id":3,"name":"Riviera, Nick","email":"kriger@notablehealth.com"}];
jest.spyOn(DoctorContext, 'useDoctorContext')
    .mockImplementation(() => contextValues);

describe('Unit tests for DoctorList', () => {
    it('Renders', () => {
        shallow(dom)
    })

    it('Renders with snapshot', () => {
        const wrapper = shallow(dom);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    })

    it('It renders with the correct props', () => {
        const wrapper = shallow(dom);
        let doctors = [],
            doctorsNames = [];

        doctors = wrapper.find(Menu.Item);

        let i = 0;
        doctors.forEach(node => {
            expect(contextValues[i].name).toEqual(node.props().children)
            i = i + 1;
        });
    })
})