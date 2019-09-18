import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { getDoctors } from '../Doctors.helpers';

import { Button, Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const DoctorList = () => {
    const [docId, setId] = useState(-1);
    const [doctorsList, setDoctors] = useState([]);
    useEffect(() => {
        let mounted = true;

        if (mounted) setId(-1)

        getDoctors().then( ({data}) => {
            if(mounted) {
                setDoctors(data)
            }
        });
        return () => {
            mounted = false;
        };
    }, [docId]);

    const handleClick = e => {
        setId(e.key)
    }

    if (docId !== -1) {
        console.log("do not show")
        return <Redirect to={`/doctor/${docId}`} />
    }


    const items = [];
    if(doctorsList && doctorsList.length !== 0) {
        doctorsList.map((doc, id) => {
            items.push(<Menu.Item key={id}>{doc.name}</Menu.Item>)
        })
    }

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
            <Button block type="primary">Logout</Button>
        </Menu>
    )
};

export default DoctorList;