import React from 'react'
import { Carousel, Button } from 'react-bootstrap'


const BannerMovies = () => {
    return (
        <div>
            <Carousel className='m-3'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/gxyWIWg.png"
                    alt="First slide"
                    />
                    <Carousel.Caption className='d-flex flex-row'>
                        <Button style={{background:'#FED941'}} className='d-flex flex-row me-3'>
                            <img
                            src="https://i.imgur.com/kSCBD6n.png"
                            alt="First slide"
                            className='me-2'
                            /> 
                            <p style={{color:'#000000'}}>VER AHORA</p>
                        </Button>
                        <Button style={{background:'#0C0E16', color:'#FED941' }} className='d-flex flex-row me-3'>
                            <img
                            src="https://i.imgur.com/KW0i7zZ.png"
                            alt="First slide"
                            className='me-2'
                            /> 
                            <p>VER DESPUÉS</p>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/6yZ0hND.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption className='d-flex flex-row'>
                        <Button style={{background:'#FED941'}} className='d-flex flex-row me-3'>
                            <img
                            src="https://i.imgur.com/kSCBD6n.png"
                            alt="First slide"
                            className='me-2'
                            /> 
                            <p style={{color:'#000000'}}>VER AHORA</p>
                        </Button>
                        <Button style={{background:'#0C0E16', color:'#FED941' }} className='d-flex flex-row me-3'>
                            <img
                            src="https://i.imgur.com/KW0i7zZ.png"
                            alt="First slide"
                            className='me-2'
                            /> 
                            <p>VER DESPUÉS</p>
                        </Button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.imgur.com/tHo7KLH.png"
                        alt="Third slide"
                        />
                    <Carousel.Caption className='d-flex flex-row'> 
                        <Button style={{background:'#FED941'}} className='d-flex flex-row me-3'>
                                <img
                                src="https://i.imgur.com/kSCBD6n.png"
                                alt="First slide"
                                className='me-2'
                                /> 
                                <p style={{color:'#000000'}}>VER AHORA</p>
                            </Button>
                            <Button style={{background:'#0C0E16', color:'#FED941' }} className='d-flex flex-row me-3'>
                                <img
                                src="https://i.imgur.com/KW0i7zZ.png"
                                alt="First slide"
                                /> 
                                <p>VER DESPUÉS</p>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerMovies
