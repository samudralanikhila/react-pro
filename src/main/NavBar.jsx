import "./main.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="one">
            <div style={{ justifyContent: "center", display: "flex", margin: "20px" }}>
                <div className="the">The</div>
                <div className="siren">Siren</div>
            </div>
            <div className="index" style={{ justifyContent: "space-between", display: "flex"  }}>
                <div><Link to='/' style={{ textDecoration: 'none', color: "black" }}>Home</Link></div>
                <div><Link to='./Bollywood' style={{ textDecoration: 'none', color: "black" }}>Bollywood</Link></div>
                <div><Link to='./Technology' style={{ textDecoration: 'none', color: "black" }}>Technology</Link></div>
                <div><Link to='./Hollywood' style={{ textDecoration: 'none', color: "black" }}>Hollywood</Link></div>
                <div><Link to='./Fitness' style={{ textDecoration: 'none', color: "black" }}>Fitness</Link></div>
                <div><Link to='./Food' style={{ textDecoration: 'none', color: "black" }}>Food</Link></div>
            </div>
            <hr></hr>
        </div>
    )
}
export default NavBar

