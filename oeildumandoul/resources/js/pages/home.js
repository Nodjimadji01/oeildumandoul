import { divide } from 'lodash';
import React from 'react';
import MediaQuery from 'react-responsive';
import ReactDOM from 'react-dom';
import "./app.css";
import Header from '../components/Header';
import Footer from '../components/footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

function Home() {


    return (
        <div className='home' >
            <Header></Header>
            <Navigation></Navigation>

            <div className="body">
            <div class="container">


                <input type="radio" id="i1" name="images" checked />
                <input type="radio" id="i2" name="images" />
                <input type="radio" id="i3" name="images" />
                <input type="radio" id="i4" name="images" />
                <input type="radio" id="i5" name="images" />

                <div class="slide_img" id="one">

                    <img src="https://www.globalpartnership.org/sites/default/files/docs/sierra-leone-power-great-teaching-times-crisis_0.jpg" id="LastClone"></img>
                            <label class="prev" for="i5"><span>&#x2039;</span></label>
                            <label class="next" for="i2"><span>&#x203a;</span></label>

                </div>

                <div class="slide_img" id="two">

                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" alt="im1"></img>
                            <label class="prev" for="i1"><span>&#x2039;</span></label>
                            <label class="next" for="i3"><span>&#x203a;</span></label>

                </div>

                <div class="slide_img" id="three">
                    <img src="https://static.wixstatic.com/media/314376_eebbe32986f44d16b6014526c1b637c7~mv2.jpg/v1/fill/w_1000,h_491,al_c,q_90,usm_0.66_1.00_0.01/314376_eebbe32986f44d16b6014526c1b637c7~mv2.jpg" alt=""></img>
                            <label class="prev" for="i2"><span>&#x2039;</span></label>
                            <label class="next" for="i4"><span>&#x203a;</span></label>
                </div>

                <div class="slide_img" id="four">
                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3EC0/production/_118146061_7326abc7-29d3-4211-827e-60ba04b7dac0.jpg" alt=""></img>
                            <label class="prev" for="i3"><span>&#x2039;</span></label>
                            <label class="next" for="i5"><span>&#x203a;</span></label>
                </div>

                <div class="slide_img" id="five">
                    <img src="https://media.dogfinance.com/files/articles/quel-impact-du-digital-sur-les-metiers-de-la-finance_b.jpg" alt=""></img>
                            <label class="prev" for="i4"><span>&#x2039;</span></label>
                            <label class="next" for="i1"><span>&#x203a;</span></label>

                </div>

                <div id="nav_slide">
                    <label for="i1" class="dots" id="dot1"></label>
                    <label for="i2" class="dots" id="dot2"></label>
                    <label for="i3" class="dots" id="dot3"></label>
                    <label for="i4" class="dots" id="dot4"></label>
                    <label for="i5" class="dots" id="dot5"></label>
                </div>

            </div>

                <section className="section">
                    <article className="article">
                        <div className=''>
                                    <h6 className='h6'>Politique:<h6 className='h' style={{ color:'#ffffff' }} >quatre soldats français arrêtés à Bangui</h6></h6>
                        </div>
                        <div className="container-img">
                          <img className='image' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/CFC9/production/_123339135_car.jpg.webp" alt=""></img>
                        </div>
                        <p className="p">
                            L'objectif d'un rapport de la faisabilité consiste à présenter les paramètres du projet et à définir les solutions possibles au problème, au besoin ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solutions et fournit suffisamment de renseignements, dont des renseignements très généraux sur les coûts, pour permettre au chef de projet de recommander à l'autorité approbatrice toutes les solutions possibles viables qui devraient être analysées plus en profondeur au cours de la prochaine phase (analyse de rentabilisation). Les contraintes liées au projet et les limites de dépenses font partie des divers facteurs qui permettent de déterminer la viabilité des solutions...
                            <a href='' className='plusInfos' style={{ color: 'ActiveBorder' }}><i class="fa fa-arrow-right" aria-hidden="true">plus</i></a>
                        </p>
                       <div className='div_lien'>

                            <ul className='uls'>

                                <li>
                                     <a className='plusInfos'>L'objectif d'un rapport de la faisabilité consiste à présenter...</a>
                                </li>
                                <li>
                                     <a className='plusInfos'>L'objectif d'un rapport de la faisabilité consiste à présenter...</a>
                                </li>

                                <li>
                                     <a className='plusInfos'>L'objectif d'un rapport de la faisabilité consiste à présenter...</a>
                                </li>
                            </ul>

                            <di>
                              <hr className="hr"   />
                            </di>
                            <div className="container-img">
                                 <img className='images' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/CFC9/production/_123339135_car.jpg.webp" alt=""></img>
                            </div>
                            <div className="container-img">
                                 <img className='images' src="https://s.rfi.fr/media/display/b95e1c94-0d3e-11ea-9bef-005056a9aa4d/w:246/p:16x9/2017_mbst_246_a_051_014_0.webp" alt=""></img>
                            </div>
                            <div className="container-img">
                                 <img className='images' src="https://s.rfi.fr/media/display/321e31e8-93ff-11ec-b45d-005056a90284/w:246/p:16x9/choguel%202.webp" alt=""></img>
                            </div>
                            <div className="container-img">
                                 <img className='images' src="https://s.rfi.fr/media/display/5a731db0-9347-11ec-aab9-005056a90321/w:388/p:16x9/russie-vladimir-poutine-allocution-21fevrier2022.webp" alt=""></img>
                            </div>
                       </div>
                  </article>

                </section>


            </div>

            <Footer></Footer>
        </div>

    );
}
if(document.getElementById('home')){
    ReactDOM.render(<Home/>,document.getElementById('home'));
}
