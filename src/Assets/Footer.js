import React from 'react'

export default function Footer() {
    return (
        <div >
            <div className="footer--parent">
                <div className="footer--cont1">
                    <h3>Address & Contact</h3>
                    <p className="address">
                        Chathian, Hattian Bala, AJK.
                    </p>
                    <p className="ph--no">
                        Mobile: 0347-8161133
                    </p>
                </div>

                <div className="footer--cont4">
                    <h3>Quick Links</h3>
                <ul>
                    <li className="support">About us</li>
                    <li className="support">Privacy</li>
                    <li className="support">Term of use</li>
                    <li className="support">Contact us</li>
                </ul>
                </div>

                <div className="footer--cont2">
                    <h3>Follow With Us.</h3>
                    <p>Join our social media's <br />and get more update of<br /> latest tours, sightseeing &<br /> attractions.</p>
                </div>

                <div className="footer--cont3">
                    <h3>Tour Packages</h3>
                    <ul>
                    <li className="support">Tour To Kashmir</li>
                    <li className="support">Rajasthan Tour</li>
                    <li className="support">Gujarat Tour</li>
                    </ul>
                </div>
            </div>
            <p className="bottom">
            Copyright &copy; 2023 Simple Tours and Travels . All Rights Reserved.
            </p>
        </div>
    )
}
