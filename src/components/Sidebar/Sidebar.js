import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin5">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="pt-4">
                        <li className="sidebar-item">
                            <Link className="waves-effect waves-dark sidebar-link" to="/araclar" aria-expanded="false">
                                <i className="fa fa-truck"></i>
                                <span className="hide-menu">Araç Tipleri </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="waves-effect waves-dark sidebar-link" to="/hareketler" aria-expanded="false">
                                <i className="fa fa-exchange-alt"></i>
                                <span className="hide-menu">Giriş - Çıkış </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="waves-effect waves-dark sidebar-link" to="#" aria-expanded="false">
                                <i className="fa fa-check"></i>
                                <span className="hide-menu">Oturumu kapat </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar