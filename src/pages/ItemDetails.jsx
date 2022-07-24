import React,{useEffect, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import Header from '../components/header/Header';
import 'react-tabs/style/react-tabs.css';
import Sanscript from "@sanskrit-coders/sanscript";
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import { getAadhayasById, getMandalamById } from '../data/data';

const ItemDetails = () => {

    const languages = [
        "kannada",
        "telugu",
        "devanagari",
        "tamil",
        "iast",
      ];

  const {mandalam, aadhyayaa} = useParams()
  const data = getAadhayasById(Number(mandalam), Number(aadhyayaa));
  const mandalamData = getMandalamById(Number(mandalam))
  const audioRef = useRef(null);
  const [audioSource, setAudioSource] = useState(1);
  const [language, setLanguage] = useState("devanagari");
  const [aad, setAad] = useState(Number(aadhyayaa))

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [audioSource, audioRef]);

  if(mandalam === '10'){
      
  }

  const folderLengths = [9,9,12,10,10,10,10,10,10,12]

  return <div className='item-details'>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Auctions</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Auctions Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletters mandalam={mandalam} aadhyayaa={aadhyayaa} audioSource={audioSource} setAudioSource={setAudioSource} aad={aad} audioRef={audioRef} />
            </div>
        </section>
        <section className="tf-section item-details-page">
        <div className='aad-lyrics'>
            {data.sukta.map((item, index) => {
                    return <Texts language={language} key={index} />;

                    function Texts({ language }) {
                    return (
                        <div
                        key={item.id}
                        onClick={() => setAudioSource(item.id)}
                        //@ts-ignore
                        ref={item.id === audioSource ? scrollRef : null}
                        style={{cursor: "pointer", padding: "2rem"}}
                        >
                        <h3
                            style={{ color: item.id === audioSource ? "blueviolet" : "black" }}
                        >
                            <b>{Sanscript.t(item.a, "devanagari", language)}</b>
                        </h3>
                        <h4
                            style={{ color: item.id === audioSource ? "blueviolet" : "black" }}
                        >
                            {Sanscript.t(item.c, "devanagari", language)}
                        </h4>
                        <br />
                        </div>
                    );
                    }
                })}
            </div>
        </section>
        <Footer />
  </div>;
};

export default ItemDetails;
