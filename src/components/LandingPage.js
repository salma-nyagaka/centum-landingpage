import React from 'react';
import '../assets/styles/landingpage.css';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';

import work from '../assets/images/work.svg';
import work2 from '../assets/images/work2.svg';
import work3 from '../assets/images/work3.svg';
import MessageForm from '../components/MessageForm';
import CountUp from 'react-countup';

const LandingPage = () => {
    return (
        <div>

            <header>
                <div class="navbar">
                    <a href="#contact">Contact</a>
                    <a href="#news">Investors</a>
                    <a href="#home">Home</a>
                </div>
                <div class="container">
                    <div class="header-content">
                        <div class="row">
                            {/* <div class="col-lg-6"> */}
                            <div class="text" >

                                <h1>Centum investment company</h1>
                                <h2>Centum is East Africa's leading investment company <br />listed
                    on the Nairobi Securities Exchange and Uganda Securities
                    Exchange.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="count" className="hidden-xs">
                    <ul>
                        <li className="number-list"><span className="number"><CountUp start={0} end={10000} /></span>Members</li>
                        <li className="number-list"><span className="number"><CountUp start={0} end={53} /></span>Years in the market</li>
                        <li className="number-list"><span className="number"><CountUp start={0} end={5350} /></span>People Served</li>
                    </ul>
                </div>
            </header>
            <h2 className="work">About Us</h2>
            <div class="cards-list">

                <div class="card 1">
                    <div class="card_image">
                    </div>
                    <div class="card_title title-white">
                        <h4><b>Mission</b></h4>
                        <p>African foremost investment channel</p>
                    </div>
                </div>

                <div class="card 2">
                    <div class="card_image">
                    </div>
                    <div class="card_title title-white">
                        <h4><b>Vision</b></h4>
                        <p>To create real, tangible wealth by providing the channel
                            through which investors access and build extra ordinary
                        enterprises in Africa</p>
                    </div>
                </div>

                <div class="card 3">
                    <div class="card_image">
                        {/* <div class="card_image"> <img src={card} /> </div> */}
                    </div>
                    <div class="card_title title-white">
                        <h4><b>Value</b></h4>
                        <p>We deliver to promise</p>
                        <p>We have unity of purpose</p>
                        <p>We are partners</p>
                        <p>We invest responsibly</p>
                    </div>
                </div>
            </div>

            <section className="parallax-window" data-parallax="scroll" data-natural-width="1200" data-natural-height="600">
                <div className="parallax-content">
                    <div className="sub_content">
                        <h3>The leading investment company</h3>
                        <p>
                            Offering 24 hour support
                        </p>
                    </div>
                </div>
            </section>
            {/* </div> */}
            <h2 className="work">Our work</h2>

            <div class="work-row">
                <div class="column work-column" id="work-column" >
                    <img src={work} className='work' alt='work' />
                    <h3 className="work-description">Our objective within the Real Estate sector is to develop
                        new urban nodes across the East African region that
      represent investment grade assets of scale.</h3>

                </div>
                <div class="column  work-column" >
                    <img src={work3} className='work' alt='work' />
                    <h3 className="work-description">We have the Agribusiness sector that concentrates on opportunities where high value can be unlocked
  and capitalize on areas that will allow us to serve an under-served market and a Power sector called Amu Power Limited  which is a Centum Investment-Gulf Energy
  consortium whose vision is to anchor long term national economic growth and aspirations by provision of reliable, safe and affordable power. </h3>

                </div>
                <div class="column  work-column" >
                    <img src={work2} className='work' alt='work' />
                    <h3 className="work-description"> The principal objective is to acquire a diversified portfolio of growth capital and change of control
      investments in mid-sized companies primarily operating in growth markets across East Africa.</h3>

                </div>
            </div>

            <div class="footer">
                <div class="footer-row">
                    <div class="column " id="work-column" >
                        <h4>Centum Kenya</h4>
                        <h3>5th Floor, International Life House, </h3>
                        <h3>Phone Number:  020 252397</h3>


                    </div>
                    <div class="column" >
                        <h4>About</h4>
                        <h3>About Us</h3>
                        <h3>Privay Policy</h3>
                        <h3>Terms of Service</h3>

                    </div>
                    <div class="column" >
                        <h4>CONNECT WITH US</h4>
                        <h3>Twitter<span><img src={twitter} class="social-icons" /></span></h3>
                        <h3>Linked In<span><img src={linkedin} class="social-icons" /></span></h3>
                        <h3>Facebook<span><img src={facebook} class="social-icons" /></span></h3>

                    </div>
                </div>
                <MessageForm />
                {/* <hr/> */}

                <h2>Copyright © 2020 Centum Investment Company Plc</h2>
            </div>

        </div>
    )

}

export default LandingPage