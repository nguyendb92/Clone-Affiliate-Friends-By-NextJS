function Panel() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-user-secret fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">11</div>
                                    <div>ASP管理</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/user_details/serviceprovider/">
                            <div className="panel-footer">
                                <span className="pull-left">詳細を見る</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-green">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-user fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">38</div>
                                    <div>運営者</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/auth/managers/">
                            <div className="panel-footer">
                                <span className="pull-left">詳細を見る</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-group fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">24</div>
                                    <div>権限管理</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/auth/customgroup/">
                            <div className="panel-footer">
                                <span className="pull-left">詳細を見る</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-red">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-user fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">47</div>
                                    <div>会員管理</div>
                                </div>
                            </div>
                        </div>
                        <a href="/admin/auth/member/">
                            <div className="panel-footer">
                                <span className="pull-left">詳細を見る</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Panel;