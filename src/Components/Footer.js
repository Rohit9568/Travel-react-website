import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
       <div className ="footer">

     <div className="top">
        <div>
            <h1>TrekTrove</h1>
            <p>Choose Your favourite destination</p>
        </div>
        
        <div>
            <Link to="/" className="link">
            <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="/" className="link">
            <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/" className="link">
            <i class="fa-brands fa-github"></i>
            </Link>
            <Link to="/" className="link">
            <i class="fa-brands fa-twitter"></i>
            </Link>
        </div>
     </div>



     <div className="bottom">
        <div>
            <h4>Project </h4>
            <Link to = "/" className="link">Changelog</Link>
            <Link to = "/" className="link">Status</Link>
            <Link to = "/" className="link">License</Link>
            <Link to = "/" className="link">All Versions</Link>

        </div>

        <div>
            <h4>Community</h4>
            <Link to = "/" className="link">Github</Link>
            <Link to = "/" className="link">Issues</Link>
            <Link to = "/" className="link">Project</Link>
            <Link to = "/" className="link">Twitter</Link>

        </div>

        <div>
            <h4>Help </h4>
            <Link to = "/" className="link">Support</Link>
            <Link to = "/" className="link">Troubleshooting</Link>
            <Link to = "/contact" className="link">Contact Us</Link>
            

        </div>

        <div>
            <h4>Others </h4>
            <Link to = "/" className="link">Terms of Service</Link>
            <Link to = "/" className="link">Privacy Policy</Link> 
            <Link to = "/" className="link">License</Link>
          

        </div>
     </div>

       </div>
    )
}

export default Footer;