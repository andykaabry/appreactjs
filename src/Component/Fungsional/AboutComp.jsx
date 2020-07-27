import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp () {
    
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Selamat Datang Di Habitat Helm</h1>
                <p className="lead">Alamat   : Jln.Damai No.86 Purwokerto, Banyumas, Jawa Tengah </p>
                <p className="lead">No Telp  : +6285155429567 </p>
                <p className="lead">Habitat Helm merupakan Online Shop penjualan Helm, Yang bertujuan mempermudah konsumen dalam melakukan kegiatan transaksi pembelian helm dibandingkan dengan membeli secara langsung ke Toko.</p>
                <hr className="my-2" />
                <p className="lead">

                </p>

            </Jumbotron>

            <Container>
                <Row>
                    <Col><CardComp id="1" Nama="Andika Abri Rama" Alamat="Purwokerto, Jawa Tengah"/></Col>

                </Row>

            </Container>

        </div>
    )
}

export default AboutComp