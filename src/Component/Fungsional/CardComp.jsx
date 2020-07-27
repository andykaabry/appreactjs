import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://cdn.techinasia.com/wp-content/uploads/2015/07/online-shopping-ecommerce-ss-1920.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.Nama}</h3></CardTitle>
                    <CardSubtitle>{props.Alamat}</CardSubtitle>


                </CardBody>
            </Card>
        </div>
    )
}

export default CardComp;