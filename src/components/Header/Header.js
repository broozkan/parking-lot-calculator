import React from 'react'


const Header = () => {
    return (
        <header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">

                    <a class="navbar-brand" href="index.html">
                        <b class="logo-icon ps-2">
                            <img src="../../assets/images/logo-icon.png" alt="homepage" class="light-logo" />

                        </b>
                        <span class="logo-text">
                            <img src="../../assets/images/logo-text.png" alt="homepage" class="light-logo" />

                        </span>

                    </a>
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                </div>

                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">




                </div>
            </nav>
        </header>
    )
}

export default Header