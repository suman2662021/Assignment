import "./navbar.css"
import Setting from "./Vector.png"
import Home from "./home.png"
import Mylearning from "./mylearning.png"
import Learningpath from "./learningp.png"
import Performence from "./Group.png"
import Cart from "./cart.png"
import Arrow from "./arrow.png"
import Larrow from "./larrow.png"

const Navbar = () => {
    return ( 
        <div className="main-nav">
            <div className="nav-image"></div>
            
            <div className="nav-rect"></div>

            <div className="nav-items">
                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Home}  alt="none" /></div></div></div>
                    <div className="setting">Home</div>
                </div>

                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Mylearning} alt="none" /></div></div></div>
                    <div className="mylearning">My Learning</div>
                    <div className="larrow"><img src={Larrow} alt="none" /></div>
                    <div className="liitems">
                        <ul>
                            <li>Course</li>
                            <li>Specialization</li>
                        </ul>
                    </div>
                </div>

                
                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Learningpath} alt="none" /></div></div></div>
                    <div className="mylearning">Learning Path</div>
                </div>

                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Performence} alt="none" /></div></div></div>
                    <div className="setting">Performence</div>
                </div>

                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Cart} alt="none" /></div></div></div>
                    <div className="setting">Cart</div>
                </div>

                <div className="nav-li6">
                    <div className="main-img6"><div className="img6"><div className="set-img"><img src={Setting} alt="none" /></div></div></div>
                    <div className="setting">Setting</div>
                </div>
            </div>

            <div className="arrow"><img src={Arrow} alt="none" /></div>
        </div>
     );
}
 
export default Navbar;