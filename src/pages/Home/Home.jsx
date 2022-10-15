import NavBar from "../../main/NavBar"
import { Link } from "react-router-dom"
import "./home.css"
const Home = () => {
    return (
        <div className="main">
            <div>
                <NavBar />
            </div>

            <div className="one">
                <div className="one1"><Link to='/contant1' style={{ textDecoration: 'none', color: "black" }}>

                    <div className="one12">
                        <div className="one13">
                            <p style={{ color: 'white', fontSize: "25px", margin: "0" }}>Tittle of vertical gallery</p>
                            <span style={{ color: 'white' }}>Travel Aug/2022</span>
                        </div>
                    </div>


                    <div>
                        <div className="one14">
                            <div className="one15">
                                <div className="one16"><p style={{ color: 'white', fontSize: "20px", margin: "0" }}>Travel Enjoy The Nature</p>
                                    <span style={{ color: 'white' }}>Travel Aug/2022</span>
                                </div>
                            </div>
                            <div className="one15">
                                <div className="one16"><p style={{ color: 'white', fontSize: "20px", margin: "0" }}>Travel Enjoy The Nature</p>
                                    <span style={{ color: 'white' }}>Travel Aug/2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>
            </div>

            <div className="latest">
                <h1>The Latest</h1>
                <hr className="hr1"></hr>
            </div>


            <div className="latest1">
                <div className="two">
                    <img src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg" alt="" srcset="" width={"350px"} />
                    <h2>KONARK Is The Most Famous Temple In India</h2>
                    <p>The Konark or Konarak Sun temple is dedicated to the Hindu sun god Surya, and, conceived as a giant stone chariot with 12 wheels, it is the most famous of the few sun temples built in India.</p>
                    <span>Travel Aug/2020</span>
                </div>
                <div className="two">
                    <img src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg" alt="" srcset="" width={"350px"} />
                    <h2>KONARK Is The Most Famous Temple In India</h2>
                    <p>The Konark or Konarak Sun temple is dedicated to the Hindu sun god Surya, and, conceived as a giant stone chariot with 12 wheels, it is the most famous of the few sun temples built in India.</p>
                    <span>Travel Aug/2020</span>
                </div>
                <div className="two">
                    <img src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg" alt="" srcset="" width={"350px"} />
                    <h2>KONARK Is The Most Famous Temple In India</h2>
                    <p>The Konark or Konarak Sun temple is dedicated to the Hindu sun god Surya, and, conceived as a giant stone chariot with 12 wheels, it is the most famous of the few sun temples built in India.</p>
                    <span>Travel Aug/2020</span>
                </div>
            </div>

            <div className="artical">
                <h1>The Artical</h1>
                <hr className="hr1"></hr>
            </div>

            <div className="artical1">
                <div>
                    <hr />
                    <div className="three">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Ellora_cave16_001.jpg" alt="" srcset="" width={"300px"} />
                        <div className="three1">
                            <h3>Catch Caves with an adventure guide</h3>
                            <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                            <p>Travel <span>/Augest 2017</span></p>
                        </div>
                    </div>

                    <hr />
                    <div className="three">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Ellora_cave16_001.jpg" alt="" srcset="" width={"300px"} />
                        <div className="three1">
                            <h3>Catch Caves with an adventure guide</h3>
                            <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                            <p>Travel <span>/Augest 2017</span></p>
                        </div>
                    </div>

                    <hr />
                    <div className="three">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Ellora_cave16_001.jpg" alt="" srcset="" width={"300px"} />
                        <div className="three1">
                            <h3>Catch Caves with an adventure guide</h3>
                            <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                            <p>Travel <span>/Augest 2017</span></p>
                        </div>
                    </div>
                    <br></br>
                </div>
                <div>
                    <div className="four">
                        <h1 className="add">Advertistement</h1>
                    </div>
                </div>
            </div>
            <div className="story">
                <h1> Latest story</h1>
                <hr className="hr1"></hr>
            </div>
            <div className="five">
                
                <div className="five1">
                    <h3>Catch Caves with an adventure guide</h3>
                    <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                    <p>Travel <span>/Augest 2017</span></p>
                </div>
                <hr></hr>
                <div className="five1">
                    <h3>Catch Caves with an adventure guide</h3>
                    <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                    <p>Travel <span>/Augest 2017</span></p>
                </div>
                <hr></hr>
                <div className="five1">
                    <h3>Catch Caves with an adventure guide</h3>
                    <p> In INDIA Maharashtra,  is one of the largest rock-cut Hindu temple cave  in the world</p>
                    <p>Travel <span>/Augest 2017</span></p>
                </div>
            </div>



        </div >
    )
}
export default Home