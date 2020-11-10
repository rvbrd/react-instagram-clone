import React from 'react'
import './Header.css'

function Header() {

    return (
        <div>
            <div className="app__header">
                <a href="/">
                    <img alt="logo" className="app__header-image"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    />
                </a>
            </div>
        </div>
    )
}

export default Header
