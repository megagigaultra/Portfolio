import React from 'react'
import { Link } from 'react-router-dom'

function Social() {

    const socials = [
        { media: 'github', link: 'https://github.com/megagigaultra'},
        { media: 'codepen', link: 'https://codepen.io/megagigaultra'},
        { media: 'twitter', link: 'https://twitter.com/din__dong'},
        { media: 'instagram', link: 'https://www.instagram.com/din____dong'},
        { media: 'lottiefiles', link: 'https://lottiefiles.com/user655018'},
    ]

    return (
        <div className="social">
            <div className="container">
                {
                    socials.map((social, key) => (
                        <>
                        <Link to={{ pathname: social.link }} className="social-links" target="_blank">
                            <h3 className="mb1">{social.media}</h3>
                        </Link>
                        {key < socials.length-1 &&
                            <div className="line mb1"></div>
                        }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Social
