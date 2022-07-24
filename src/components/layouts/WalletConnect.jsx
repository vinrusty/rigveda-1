import React , { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getMandalamById } from '../../data/data';

const WalletConnect = ({mandalam}) => {

const {id} = useParams();

return (
    <section className="tf-section connect-wallet">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading">
                        <h3>Wallet- Connect</h3>
                        <p className="desc">Most popular gaming digital nft market place </p>
                    </div>
                </div>
                {
                    getMandalamById(Number(mandalam)).aadhayaa.map((m,index)=> (
                        <div key={index} className="col-lg-4 col-md-4">
                            <div className={`sc-wallet`}>
                                <div className="icon">
                                    <Link to={`/mandalam/${id}/${m.id}`}>
                                        <h1 style={{fontSize: "4rem"}}>{m.id}</h1>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4><Link to="/login"></Link></h4>
                                    <p style={{fontSize: "2rem"}}>{m.sukta.length} Suktas</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default WalletConnect;
