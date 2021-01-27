import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Footer() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    return (
        <footer className="index1">
            <div className="media st">
                <div className="container tech">
                    Coded with <span className="warning">React</span> | 2021
                </div>
            </div>
            
                <div className="media lg">
                <div className="container skills">
                {isDesktopOrLaptop &&
                    <ul>
                        <li>Html | Scss</li>
                        <li>Javascript | React</li>
                        <li>PHP | Symfony</li>
                        <li>Wordpress | Bootstrap</li>
                    </ul>
                }
                </div>
                </div>
            
        </footer>
    )
}

export default Footer
