import React from "react";
import { FiArrowRight } from "react-icons/fi";
import CountUp from 'react-countup';
import myVideo from "../images/video1.webm";
import aboutIcon1 from '../images/about-company-icon1.png'
import aboutIcon2 from '../images/about-company-icon2.png'
import laptop from '../images/laptop.png'

function Home() {
  return (
    <>
      <section className="intro" id="intro">
        <div className="container intro__container">
          <div className="row intro__row">
            <div className="intro__content">
              <h1 className="intro__content-title">
                <span>inCARD</span> eng qiyin muammolarning oson yechimi!
              </h1>
              <p className="intro__content-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                vel nam, dolorem officia placeat asperiores tempora earum
                aspernatur.
              </p>
              <button className="button button-primary intro__content-button">
                Ulanish <FiArrowRight />
              </button>
            </div>

            <div className="intro__video">
              <video autoPlay loop draggable playsInline muted preload="none" style={{ width: "100%" }}>
                <source src={myVideo} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-company">
        <div className="container about-company">
          <div className="row about-company__row">
            <div className="col about-company__image">
              <img src={laptop} alt="404" />
            </div>
            <div className="col about-company__content">
              <h1 className="section__title">
                Biz bilan siz oson yechimlarni topasiz!
              </h1>

              <div className="about-company__content-top">
                <p>
                  Bugun juda ko'plab mikrokredit tashkilotlari va banklar
                  mijozlarga berilgan qarz mablag'larini va muddatli to'lov
                  asosida tovarlarni realizatsiya qilayotgan firmalar tomonidan
                  sotilgan tovarlarning muddati o'tgan qarzdorliklarini undirishda
                  muammolarga duch kelmoqdalar.
                </p>
                <p>inCARD ushbu qarzlarni undirishda qulay yechim taklif qiladi.</p>
              </div>

              <div className="about-company__content-bottom">
                <div className="about-company__content-item">
                  <img src={aboutIcon1} alt="404" />
                  <p>10 yillik muvaffaqiyatli tajriba</p>
                </div>
                <div className="about-company__content-item">
                  <img src={aboutIcon2} alt="404" />
                  <p>33 dan ortiq banklar biz bilan hamkorlik qilmoqda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section counter" id="counter">
        <div className="counter__container">
          <div className="container">
            <h1 className="section__title counter__title">Biz sifatli xizmatlarni o'z vaqtida taqdim etishdan faxrlanamiz</h1>
            <div className="row counter__row">
              <div className="col counter__col">
                <CountUp end={33} duration={3} className="counter__number">33+</CountUp>
                <p>Ulangan banklar</p>
              </div>
              <div className="col counter__col">
                <CountUp end={4} duration={3} className="counter__number">4x</CountUp>
                <p>Effektivlik</p>
              </div>
              <div className="col counter__col">
                <CountUp end={80} duration={3} className="counter__number">80%</CountUp>
                <p>Vaqt tejaladi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
