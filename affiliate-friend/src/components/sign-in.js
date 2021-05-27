import React from 'react'


function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">ログイン</h3>
                            </div>
                            <div className="panel-body">

                                <form role="form" action="/admin/login/" method="POST">
                                    <input type="hidden" name="csrfmiddlewaretoken"
                                           value="kdx18FwwEoaqRBP00EAr6pSMVVeHjlOjKuhOARiD9YJFYJhUzX8tSjpBm2fgSOOm"/>

                                        <input type="hidden" name="next"
                                               value="/admin/rankings/dailyentryrewardranking/"/>

                                        <fieldset>
                                            <div className="form-group">
                                                <input type="text" name="username" autoFocus="" autoCapitalize="none"
                                                       autoComplete="username" maxLength="150" title="メールアドレスを入力してください。"
                                                       placeholder="メールアドレス" className="form-control" required
                                                       id="id_username"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" autoComplete="current-password"
                                                       title="パスワード を入力してください。" placeholder="パスワード"
                                                       className="form-control"
                                                       required id="id_password"/>
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-success btn-block">ログイン
                                            </button>
                                        </fieldset>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> )
};

export default Login;