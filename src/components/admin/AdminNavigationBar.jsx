import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function AdminNavigationBar() {
    return (

        <Container>
            <Navbar expand="lg" bg="info" data-bs-theme="dark" className="mr-0"> 
                

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5">
                        <LinkContainer to="/admin-request-list">
                            <Nav.Link>Requests</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin-donor-list">
                            <Nav.Link>Donor List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin-stock-list">
                            <Nav.Link>Blood Stock</Nav.Link>
                        </LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >


    );
}