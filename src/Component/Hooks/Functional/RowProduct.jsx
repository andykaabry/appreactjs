import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    return (
        <Col>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://cf.shopee.co.id/file/37793081c50c3cf532659fe53ac36a0e" />
                    <CardBody>
                        <h5><CardTitle> Helm Retro Coklat Dop </CardTitle></h5>
                        <h3><CardSubtitle>Rp. 230.000</CardSubtitle></h3>
                        <CardText>oleh Christian Gronross</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfuDzG5n8LyX7f4IG9Yy7JdLeqCE9q-ZJ7P8em4k7Q78ESsZ6f8GLTmtOAI4PEN0keAe9wwrwNpy_5fjeKZVZ_l0uoKdH9tgvFA914rEU&usqp=CAE" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Helm INK Hitam</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 430.000</CardSubtitle></h3>
                        <CardText>oleh Christian Gronross</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2015/4/12/356203/356203_72de9508-e0db-11e4-86bc-87b949bc7260.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Helm Cakil HBC</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 365.000</CardSubtitle></h3>
                        <CardText>oleh Phillip Kotler</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/4/19/21496913/21496913_52ad89c6-6866-499c-be43-8bfaeadec795.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Helm Half face Honda</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 90.000</CardSubtitle></h3>
                        <CardText>oleh Djaslim Saladin</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        </Col>
    );
}


export default RowProduct;