import React from 'react'
import landingImage from '../../assets/img/fly.jpg'
import { ReactComponent as Arrow } from '../../assets/svg/callarrow.svg'


function Landing() {
    return (
        <>
            <div className="landing">
                <div className="background index1">
                    <div className="container shape index3">
                        <div className="circle"></div>
                    </div>
                    <div className="landing-img">
                        {/* <span className="scroll index4">Scroll</span> */}
                        <div className="gradient index2"></div>
                        <div className="dark index1"></div>
                        <img src={landingImage} alt="background letters"/>
                    </div>
                </div>
                <div className="container calltoaction">
                    {/* <span className="asterisk">*Under construction</span> */}
                    <h2 className="bgc">Stay in</h2>
                    <h2>Touch</h2>
                </div>
                <div className="container footy">
                        <span className="asterisk">* Under construction</span>
                        <Arrow className="arrow" />
                </div>
            </div>
        </>
    )
}

export default Landing

