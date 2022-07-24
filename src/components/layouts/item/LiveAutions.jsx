import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation , Scrollbar, A11y, Grid } from 'swiper';
import Countdown from "react-countdown";
import { Dropdown } from 'react-bootstrap';
import { getAllMandalam } from '../../../data/data';

const LiveAutions = props => {
    const data = props.data
  return (
    <section className="tf-section auctions-page">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="sc-heading style-2 has-icon">
                    <div className="content-left">

                        <div className="inner">
                            <div className="group">
                                <div className="icon"><i className="ripple"></i></div>
                                <h3>Listen to Rig Veda</h3>
                            </div>
                            <p className="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="swiper-container popular-coll-2">
                    <div className="swiper-wrapper">
                    <Swiper
                            modules={[ Navigation, Scrollbar, A11y ,Grid]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    },
                                767: {
                                    slidesPerView: 2,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                            }}
                            grid={{
                                "rows": 2
                            }}
                            navigation
                            scrollbar={{ draggable: true }}
                        >
                        {
                            getAllMandalam().map((mand,index) => (
                                <SwiperSlide key={index}>
                                    <LiveAutionsItem mand={mand} />
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

const LiveAutionsItem = props => (
    
    <div className="slider-item">
        <div className="sc-product-item style-6">
            <div className="product-item-top flex">
                <div className="avatar-box">
                </div>

                <div className="dropdown-options">
                    <Dropdown>
                        <Dropdown.Toggle className="options flex" id="dropdown-basic">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            Refresh Metadata
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Share
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Report
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
            <div className="product-img">
                <h1 style={{color: 'white', fontSize: "5rem", textAlign: "center"}}>{props.mand.id}</h1>
                <Link to={`/mandalam/${props.mand.id}`}
                    className="sc-button style letter"><span>Listen</span></Link>
            </div>
            <div className="product-content">
                <h5 className="title"><Link to="/item-details"></Link> </h5>
                <div className="product-price" style={{textAlign: 'center'}}>
                    <div className="title">{props.mand.aadhayaa.length} Aadhyayaas</div>
                </div>
            </div>
        </div>
    </div>
)

export default LiveAutions;
