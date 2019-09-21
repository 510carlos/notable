import React from 'react';
import { Redirect } from 'react-router';
import { Button, Menu, Icon } from 'antd';
import { useDoctorContext } from '../Doctor.context';
import { StoreDocID } from '../Doctors.hooks';

const { SubMenu } = Menu;

const DoctorList = () => {
    const [docId, setId] = StoreDocID();
    const doctorsList = useDoctorContext();

    const handleClick = e => {
        const id = e.key;
        if(id)
            setId(id)
    }

    if (docId !== -1)
        return <Redirect to={`/doctor/${docId}`} />

    const items = [];
    if(doctorsList && doctorsList.length !== 0)
        doctorsList.map((doc, id) =>
            items.push(<Menu.Item key={id}>{doc.name}</Menu.Item>)
        )

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleClick}
        >
            <SubMenu
            key="sub1"
            title={
                <span>
                <Icon type="user" />
                Physicians
                </span>
            }
            >
            {items}
            </SubMenu>
            <Button block={true} type="primary">Logout</Button>
        </Menu>
    )
};

export default DoctorList;