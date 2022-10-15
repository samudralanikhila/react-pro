import { Link } from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const ContantFour = () => {
    return (
        <div>
            <div className='con1'>

                <div className='the1'>The Siren</div>
                <div className='con2'> Get started</div>
            </div>
            <h1>Physical fitness</h1>

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
            <div className='con5'><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Amanda_Fran%C3%A7ozo_At_The_Runner_Sports-5.jpg" alt="" srcset="" width={"700px"} height={"400px"} /></div>

            <p className='con7'>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest along with a formal recovery plan.[3]

</p>
            <p className='con7'>Before the Industrial Revolution, fitness was defined as the capacity to carry out the day's activities without undue fatigue or lethargy. However, with automation and changes in lifestyles, physical fitness is now considered a measure of the body's ability to function efficiently and effectively in work and leisure activities, to be healthy, to resist hypokinetic diseases, improve immune system and to meet emergency situations.[4]</p>

            <div className='con5'><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Amanda_Fran%C3%A7ozo_At_The_Runner_Sports-5.jpg" alt="" srcset="" width={"700px"} height={"400px"} /></div>

            <p className='con7'>Fitness is defined as the quality or state of being fit and healthy.[5] Around 1950, perhaps consistent with the Industrial Revolution and the treatise of World War II, the term "fitness" increased in western vernacular by a factor of ten.[6] The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations. This has led to an interrelation of human fitness and physical attractiveness that has mobilized global fitness and fitness equipment industries. Regarding specific function, fitness is attributed to persons who possess significant aerobic or anaerobic ability (i.e., endurance or strength). A well-rounded fitness program improves a person in all aspects of fitness compared to practicing only one, such as only cardio/respiratory or only weight training.</p>

            <p className='con7'>A comprehensive fitness program tailored to an individual typically focuses on one or more specific skills,[7] and on age-[8] or health-related needs such as bone health.[9] Many sources[10] also cite mental, social and emotional health as an important part of overall fitness. This is often presented in textbooks as a triangle made up of three points, which represent physical, emotional, and mental fitness. Physical fitness has been shown to have benefits in preventing ill health and assisting recovery from injury or illness. Along with the physical health benefits of fitness, it has also been shown to have a positive impact on mental health as well by assisting in treating anxiety and depression.[11] Physical fitness can also prevent or treat many other chronic health conditions brought on by unhealthy lifestyle or aging as well and has been listed frequently as one of the most popular and advantageous self-care therapies.[12] Working out can also help some people sleep better by building up sleeping pressure and possibly alleviate some mood disorders in certain individuals.[13]</p>
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
export default ContantFour