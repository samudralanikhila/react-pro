import { Link } from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const ContantFive = () => {
    return (
        <div>
            <div className='con1'>

                <div className='the1'>The Siren</div>
                <div className='con2'> Get started</div>
            </div>
            <h1>Food</h1>

            <div className='con11'>
                <div className='con3'>
                    <img src="https://www.thehansindia.com/images/authorplaceholder.jpg?type=1" alt="" srcset="" width={"100px"} />
                    <div className='con4'>
                        <div>Nikhila Samudrala</div>
                        <div>Travel|4 Aug </div>
                    </div>
                </div>
                <div>
                    <WhatsAppIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className='con5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" srcset="" width={"700px"} height={"400px"} /></div>

            <p className='con7'>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest along with a formal recovery plan.[3]

            </p>
            <p className='con7'>Before the Industrial Revolution, fitness was defined as the capacity to carry out the day's activities without undue fatigue or lethargy. However, with automation and changes in lifestyles, physical fitness is now considered a measure of the body's ability to function efficiently and effectively in work and leisure activities, to be healthy, to resist hypokinetic diseases, improve immune system and to meet emergency situations.[4]</p>

            <div className='con5'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" srcset="" width={"700px"} height={"400px"} />
            </div>

            <p className='con7'>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</p>

            <p className='con7'>Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. Historically, humans secured food through two main methods: hunting and gathering and agriculture. As agricultural technologies increased, humans settled into agriculture lifestyles with diets shaped by the agriculture opportunities in their geography. Geographic and cultural differences has led to creation of numerous cuisines and culinary arts, including a wide array of ingredients, herbs, spices, techniques, and dishes. As cultures have mixed through forces like international trade and globalization, ingredients have become more widely available beyond their geographic and cultural origins, creating a cosmopolitan exchange of different food traditions and practices</p>
            <p className='con7'>Today, the majority of the food energy required by the ever-increasing population of the world is supplied by the industrial food industry, which produces food with intensive agriculture and distributes it through complex food processing and food distribution systems. This system of conventional agriculture relies heavily on fossil fuels, which means that the food and agricultural system is one of the major contributors to climate change, accountable for as much as 37% of total greenhouse gas emissions.[1] Addressing the carbon intensity of the food system and food waste are important mitigation measures in the global response to climate change.[citation needed]</p>
            <br></br>
            <hr></hr>
            <div className='con11'>
                <div className='con3'>
                    <img src="https://www.thehansindia.com/images/authorplaceholder.jpg?type=1" alt="" srcset="" width={"100px"} />
                    <div className='con4'>
                        <div>Nikhila Samudrala</div>
                        <div>Travel|4 Aug </div>
                    </div>
                </div>
                <div>
                    <WhatsAppIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <br></br>
            <h3>More from Srien</h3>
            <Link to="/Bollywood" className="con9">
                <div className='con10'>
                    <div className="con8">
                        <img src="https://coingeek.com/wp-content/uploads/2022/10/SEC-probes-Yuga-Labs-over-alleged-sale-of-unregistered-offerings-min.jpg" alt="" srcset="" width={"275px"} height={"250px"} />
                        <div className="bolly5">
                            <h2>SEC probes Yuga Labs over alleged sale of unregistered offerings</h2>
                            <p>The U.S. Securities and Exchange Commission (SEC) has opened investigations into the activities of Yuga Labs, creators of the Bored Ape Yacht Club (BAYC), over unregistered offerings.</p>
                            <span style={{ color: "gray" }}>SEPTEMBER 9</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="con8">
                        <img src="https://coingeek.com/wp-content/uploads/2022/10/SEC-probes-Yuga-Labs-over-alleged-sale-of-unregistered-offerings-min.jpg" alt="" srcset="" width={"275px"} height={"250px"} />
                        <div className="bolly5">
                            <h2>SEC probes Yuga Labs over alleged sale of unregistered offerings</h2>
                            <p>The U.S. Securities and Exchange Commission (SEC) has opened investigations into the activities of Yuga Labs, creators of the Bored Ape Yacht Club (BAYC), over unregistered offerings.</p>
                            <span style={{ color: "gray" }}>SEPTEMBER 9</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="con8">
                        <img src="https://coingeek.com/wp-content/uploads/2022/10/SEC-probes-Yuga-Labs-over-alleged-sale-of-unregistered-offerings-min.jpg" alt="" srcset="" width={"275px"} height={"250px"} />
                        <div className="bolly5">
                            <h2>SEC probes Yuga Labs over alleged sale of unregistered offerings</h2>
                            <p>The U.S. Securities and Exchange Commission (SEC) has opened investigations into the activities of Yuga Labs, creators of the Bored Ape Yacht Club (BAYC), over unregistered offerings.</p>
                            <span style={{ color: "gray" }}>SEPTEMBER 9</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default ContantFive