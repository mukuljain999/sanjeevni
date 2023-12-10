import { Container,Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
import { fetchStocks } from "../../Services/AdminService";

export function AdminBloodStock() {
    const [stocks,setStocks]=useState([]);
    
    async function populateStocksState(){
        try {
            const data = await fetchStocks();
            console.log(data)
            setStocks(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        populateStocksState();
        console.log(stocks[0]);
    },[]);
    
    return (

        <Container >

            <h1 className="mt=5">Blood stock</h1>
            <Table striped responsive bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Blood Type</th>
                        <th>Number of Units</th>

                    </tr>
                </thead>
                <tbody> {/* we have create a map which fetch every request form donor table */}
                    
                    {stocks.map((blood) => (
                        <tr >
                           
                            <td>{blood._id}</td>
                            <td>{blood.count}</td>
                            <td>
                                <Button variant="info" >Edit</Button>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container >


    );
}    