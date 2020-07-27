import React, {useState} from 'react'
import { Jumbotron, Button,  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom'

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen[!isOpen];
    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">H a b i t a t H e l m </h1>
                <p className="lead">Selamat datang di Habitat Helm.</p>
                <hr className="my-2" />
                <p>Silahkan Login terlebih dahulu untuk dapat menikmati fasilitas layanan kami.</p>
                <p className="lead">
                    <Link to="/login"><Button color="primary">Login</Button></Link>
                </p>
            </Jumbotron>

        </div>
    )
}

export default HomePage