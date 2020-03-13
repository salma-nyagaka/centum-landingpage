import React from 'react';
import '../assets/styles/landingpage.css';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';

import work from '../assets/images/work.svg';
import work2 from '../assets/images/work2.svg';
import work3 from '../assets/images/work3.svg';
import MessageForm from '../components/MessageForm';
import logo from '../assets/images/logo.jpeg'

const LandingPage = () => {
    return (
        <div>

            <header>
                <div class="navbar">
                    <img src={logo} class="logo" />
                    <a href="#contact">Login</a>
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
                        <li className="number-list"><span className="number">10000</span>Members</li>
                        <li className="number-list"><span className="number">53</span>Years in the market</li>
                        <li className="number-list"><span className="number">5350 </span>People Served</li>
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
            {/* <div class="container">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div> */}


            <section className="parallax-window" data-parallax="scroll" data-natural-width="1200" data-natural-height="600">
                <div className="parallax-content">
                    <div className="sub_content">
            <h2 className="work">oUR Business</h2>
                        <div class="grid-container">
                            <div class="grid-item">Agribusiness sector
                            {/* <div class="overlay"> */}
                                    {/* <div class="text">
                                        <p>Integration: We want to tap into the entire value chain so as to capture a large proportion of the value of the end product</p>

                                        <p>Scale: We will focus on scalable opportunities that leverage our strengths</p>

                                        <p>Focus: Concentrate on opportunities where high value can be unlocked</p>

                                        <p>Market attractiveness: Capitalize on areas that will allow us to serve an under-served market</p>

                                        Expertise: We will acquire and build expertise to streamline implementation of our strategy</div> */}
                                {/* </div> */}


                            </div>
                            <div class="grid-item">Financial Services Sector</div>
                            <div class="grid-item">Power sector</div>
                            <div class="grid-item">Education sector</div>
                            <div class="grid-item">Consumer sector</div>
                            <div class="grid-item">Real estate sector</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
            <h2 className="work">Service entities</h2>

            <div class="work-row">
                <div class="column work-column" id="work-column" >
                    <img src={work} className='work' alt='work' />
                    <h3 className="work-description">Nabo's vision is to be the  leading  truly  African 
                    investment solutions provider  in scale,  innovation and profitability. </h3>

                </div>
                <div class="column  work-column" >
                    <img src={work3} className='work' alt='work' />
                    <h3 className="work-description">Athena Properties limited is a wholly owned subsidiary of Centum. We offer clients a comprehensive solution for mixed use property developments, from local urban 
                    nodes to large scale new city development throughout sub-Saharan Africa.</h3>

                </div>
                <div class="column  work-column" >
                    <img src={work2} className='work' alt='work' />
                    <h3 className="work-description"> At Centum Business Solutions, we employ our resources to assist the other business lines achieve their strategies in the most efficient manner while keeping in line wit
                    strategy of delivering value to our clients and shareholders.</h3>

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