import React from 'react';
import '../src/index.css';

export default function Services() {
    return (
        <section id="Services">
            <h2 className="servicesTitle">My Services</h2>
            <p className="servicesDesc">Here are some of the services I offer:</p>
            
            <div className="serviceItem">
                <h3>Game Development</h3>
                <p>Creating immersive mobile and PC games using Unity and C#.</p>
            </div>

            <div className="serviceItem">
                <h3>Web Development</h3>
                <p>Building responsive websites using React, JavaScript, and CSS.</p>
            </div>

            <div className="serviceItem">
                <h3>App Development</h3>
                <p>Developing mobile applications for Android and iOS.</p>
            </div>
        </section>
    );
}
