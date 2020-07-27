import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContext';
import { AuthContext } from '../../App';

const NavbarComp = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {state, dispatch} = useContext(AuthContext)

    return (
        <div>

            <p class="bg-primary text-green"><marquee>Selamat Datang Di Habitat Helm</marquee> </p>
            <Navbar className="navbar-dark bg-dark" blue expand="md">
                <NavbarBrand to="/">HABITAT HELM</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/barang" className="nav-link">Data Barang</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/supplier" className="nav-link">Data Supplier</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">Tentang Kami</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/logout" className="nav-link">Logout</NavLink>
                        </NavItem>


                        {/*
                        <NavItem>
                            <NavLink to="/kelas" className="nav-link">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Hook</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useeffects" className="nav-link">Use Effects</NavLink>
                        </NavItem>
                         <NavItem>
                            <NavLink to="/reducer" className="nav-link">Reducer</NavLink>
                        </NavItem>*/}
                    </Nav>

                    <NavbarText>
                        <Button color="default">
                        onClick={()=>
                        dispatch({
                            type:"LOGOUT"
                        })}>
                            {state.isAuthenticated && (
                                <NavLink>"LOGOUT"</NavLink>
                            )}
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavbarComp