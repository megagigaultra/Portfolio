import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { ReactComponent as Github } from '../../assets/svg/socials/github.svg'
import { ReactComponent as Codepen } from '../../assets/svg/socials/codepen.svg'
import { ReactComponent as Twitter } from '../../assets/svg/socials/twitter.svg'
import { ReactComponent as Instagram } from '../../assets/svg/socials/instagram.svg'
import { ReactComponent as Lottiefiles } from '../../assets/svg/socials/lottiefiles.svg'

function Social() {

    const isTablet = useMediaQuery({
        query: '(min-device-width: 500px)'
    })

    const socials = [
        { media: 'Github', link: 'https://github.com/megagigaultra', svg: <Github className="social-icon"/>},
        { media: 'Codepen', link: 'https://codepen.io/megagigaultra', svg: <Codepen className="social-icon"/>},
        { media: 'Twitter', link: 'https://twitter.com/din__dong', svg: <Twitter className="social-icon"/>},
        { media: 'Instagram', link: 'https://www.instagram.com/din____dong', svg: <Instagram className="social-icon"/>},
        { media: 'Lottiefiles', link: 'https://lottiefiles.com/user655018', svg: <Lottiefiles className="social-icon"/>},
    ]

    return (
        <div className="social index1">
            {
                isTablet &&
                    <div className="media lg">
                        <div className="container">
                            <div className="heady">
                                <div className="line thick"></div>
                            </div>
                            <h3>Under construction</h3>
                            <h3>Come back later</h3>
                        </div>
                    </div>
            }
            <div className="media st">
                <div className="container">
                    {
                        isTablet &&
                            <div className="heady">
                                <h4>Socials & +</h4>
                            </div>
                    }
                    {
                        socials.map(({media, link, svg}, key) => (
                            <>
                                <Link to={{ pathname: link }} className="social-links" target="_blank">
                                    {
                                        !isTablet &&
                                            <h5 className="mb1">{media}</h5>
                                    }
                                    {
                                        isTablet &&
                                            svg
                                    }
                                </Link>
                                {key < socials.length-1 && !isTablet &&
                                    <div className="line mb1"></div>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Social
