import profile from '../src/assets/profile.jpeg';
import { Link } from 'react-router-dom';
import '../src/index.css';

export default function Home() {
     return (
         <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span><br />
                    <span className="introText">
                        I am <span className="introName">Can Cankat</span> 
                        <img src={profile} alt="profile" className="bbg" width="750" height="750" align="right" />
                        <br />Game Developer
                    </span>
                    <p className="introPara">I am expert at object-oriented languages.</p>

                    {/* ✅ Updated Button without an Image */}
                    <Link to="/about">
                        <button className="btn">Learn More About Me</button>
                    </Link>
                </div>
            </section>
        </>
    );
}
