import React from "react";

function NavHeader() {
    return (
        <>
            <div className="navbar-header">
                <a className="navbar-brand" href="/admin/">
                    ASP統合システム<br/>運営者向け機能
                </a>
            </div>

            <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>

            <ul className="nav navbar-right navbar-top-links">

                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i>
                        Viet
                        <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a href="/admin/password_change/">
                                <i className="fa fa-gear fa-fw"></i> パスワードの変更
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a id="logout-btn" href="/admin/logout/">
                                <i className="fa fa-sign-out fa-fw"></i> ログアウト
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
};

export default NavHeader;