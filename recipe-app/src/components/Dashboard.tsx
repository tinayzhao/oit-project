import React, { useState } from "react";
import { Nav } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <Nav className="justify-content-end">
            <Nav.Item>
                <Nav.Link>Profile</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    );
}

export default Dashboard;