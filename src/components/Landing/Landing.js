import React from 'react'
import landingImage from '../../assets/img/nev.jpg'
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg'


function Landing() {
    return (
        <>
            <div className="landing">
                <div className="container shortcuts mb2">
                    <div className="shortcut mb05">
                        <div className="arrow-container"><Arrow className="arrow right"/></div>
                        <h2 className="shortcut-about">About</h2>
                    </div>
                    <div className="shortcut mb05">
                        <div className="arrow-container"><Arrow className="arrow right-down"/></div>
                        <h2 className="shortcut-fonts">Fonts</h2>
                    </div>
                    <div className="shortcut">
                        <div className="arrow-container"><Arrow className="arrow down"/></div>
                        <h2 className="shortcut-blog">Blog</h2>
                    </div>
                </div>
                <div className="background index1">
                    <div className="container logo-shape index3">
                        <div className="shape-long"></div>
                        <div className="shape-short"></div>
                    </div>
                    <div className="landing-img">
                        {/* <span className="scroll index4">Scroll</span> */}
                        <div className="gradient index2"></div>
                        <div className="dark index1"></div>
                        <img src={landingImage} alt="background letters"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing

