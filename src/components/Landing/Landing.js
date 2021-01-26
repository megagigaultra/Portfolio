import React from 'react'
import { useMediaQuery } from 'react-responsive'
import landingImage from '../../assets/img/fly.jpg'
import { ReactComponent as Arrow } from '../../assets/svg/callarrow.svg'

function Landing() {
    const isTablet = useMediaQuery({
        query: '(min-device-width: 500px)'
    })
    return (
        <>
            <div className="landing">
                <div className="background index1">
                    {
                        !isTablet &&
                            <div className="container shape index3">
                                <div className="circle"></div>
                            </div>
                    }
                    <div className="landing-img">
                        {/* <span className="scroll index4">Scroll</span> */}
                        <div className="gradient index2"></div>
                        <div className="dark index1"></div>
                        <img src={landingImage} alt="background letters"/>
                    </div>
                </div>
                {
                        !isTablet &&
                        <div className="container footy index1">
                            <h2 className="bgc">Stay in</h2>
                            <h2>Touch</h2>
                            <Arrow className="arrow" />
                        </div>
                }
            </div>
        </>
    )
}

export default Landing

