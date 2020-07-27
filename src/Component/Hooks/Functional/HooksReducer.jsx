import React, {useReducer, useContext} from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { keranjangContext } from '../../../App';

function HooksReducer() {

    const countContext = useContext(keranjangContext)

    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQguJNI_Mfw8wIuOZ7xxBlpfAbNxtlpSTOevGTr1X7B-mvK7ffBhd1AEp9ujOezzyBHXfDADHFLa17WHln-WCP85in30mb4vARqu0-oVI4&usqp=CAE" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs="6">
                    <h3>Helm Retro Momo KP 08 Coklat Dop</h3>
                    <p>Harga</p>
                    <h3>Rp. {countContext.keranjangState.hargatotal}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'kurang'})} >-</Button></Col>
                      
                    </Row>
                    <br/>
                    <Button color="success" size="lg">Total Rp. {countContext.keranjangState.hargatotal}</Button>
                    <hr/>
                    <NavLink to='/tagihan'>Tagihan Belanja</NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default HooksReducer;