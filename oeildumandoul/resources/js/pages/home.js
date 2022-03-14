import { divide } from 'lodash';
import React from 'react';
import MediaQuery from 'react-responsive';
import ReactDOM from 'react-dom';
import "./app.css";
import Header from '../components/Header';
import Footer from '../components/footer';
import Slider from '../components/caroussel';
import Navigation from '../components/Navigation';




function Home() {




    return (
        <div className='home' >
            <Header></Header>

            <Navigation></Navigation>



            <div className="body">
              <Slider></Slider>
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





                                <div  className='row'>
                                    <ul className='ul_img' >
                                        <li className='li_img' >

                                        <div className="container-img ">
                                                    <img className='images' src="https://s.rfi.fr/media/display/be533de2-a24c-11ec-a39f-005056bfb2b6/w:388/p:16x9/AP21330450073160.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>
                                        <li className='li_img' >
                                        <div className="container-img ">
                                                    <img className='images' src="https://s.rfi.fr/media/display/111d0db4-a234-11ec-81d2-005056bfb2b6/w:388/p:16x9/AP432924507467.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>

                                    </ul>
                                    <ul className='ul_img' >
                                        <li className='li_img' >

                                            <div className="container-img ">
                                                    <img className='images' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/CFC9/production/_123339135_car.jpg.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>
                                        <li className='li_img' >
                                        <div className="container-img ">
                                                    <img className='images' src="https://s.france24.com/media/display/0bfb4c04-9980-11ec-820a-005056a90284/w:246/p:16x9/main-dossier-guerre-ukraine-1920x1080.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>

                                    </ul>
                                    <ul className='ul_img' >
                                        <li className='li_img' >
                                        <div className="container-img ">
                                                    <img className='images' src="https://s.france24.com/media/display/3274455a-105f-11e9-88a4-005056a964fe/w:388/p:16x9/main-imagebentalha.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>
                                        <li className='li_img' >
                                        <div className="container-img ">
                                                    <img className='images' src="https://s.france24.com/media/display/c4cea0c8-1099-11e9-b6cf-005056bff430/w:1024/p:16x9/main_infog_ps_0.webp" alt=""></img>
                                                    <p className='p_img' >ou à l'occasion précisés. Après avoir lancé des idées sur les solutions possibles, l'équipe de projet expose en détail chacune de ces solution</p>
                                            </div>
                                        </li>

                                    </ul>
                                  </div>
                                  <di>
                              <hr className="hr"   />
                            </di>



                       </div>
                  </article>

                </section>

            </div>
            <Footer></Footer>
        </div>

    ); plugins
}
if(document.getElementById('home')){
    ReactDOM.render(<Home/>,document.getElementById('home'));
}
