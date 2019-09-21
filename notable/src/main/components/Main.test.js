import * as React from 'react';

import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import Main from './Main';

import * as DoctorContext from '../../doctor/Doctor.context';

const dom = <Main />;

const contextValues = [{"id":1,"name":"Hibbert, Julius","email":"kriger@notablehealth.com"},{"id":2,"name":"Krieger, Algemap","email":"kriger@notablehealth.com"},{"id":3,"name":"Riviera, Nick","email":"kriger@notablehealth.com"}];
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
})