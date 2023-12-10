import React from 'react';


import { Container } from 'react-bootstrap';
import { AdminRequestList } from './AdminRequestList';
import { AdminDonorList } from './AdminDonorList';
import { AdminBloodStock } from './AdminBloodStock';
// Import your CSS file for component styling

export const Admin = () => {
    return (
        <Container>

            
            <AdminRequestList></AdminRequestList>
            <AdminDonorList></AdminDonorList>

            <AdminBloodStock></AdminBloodStock>

        </Container>

    );
};



export default Admin;
