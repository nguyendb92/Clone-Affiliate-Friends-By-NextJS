export default function sideBar() {
    return (
        <>
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav in" id="side-menu">
                        <li>
                            <a href="/admin" className="active"> TOP</a>
                        </li>


                        <li className="app-auth module ">
                            <a href="#">
                                会員一覧<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">
                                <li className="model-m">

                                    <a href="/admin/auth/member/">会員管理</a>

                                </li>


                                <li>
                                    <a href="/admin/auth/member/via_friend/import_csv?action=add">フレンズ経由登録</a>
                                </li>
                                <li>
                                    <a href="/admin/auth/member/via_friend/import_csv?action=delete">フレンズ経由登録 削除</a>
                                </li>

                            </ul>
                        </li>



                        <li className="app-django_celery_results module">
                            <a href="#" title="Celery Results アプリケーション内のモデル">
                                Celery Results<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-t">

                                    <a href="/admin/django_celery_results/taskresult/">Task results</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-contents module">
                            <a href="#" title="Contents アプリケーション内のモデル">
                                Contents<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-o">

                                    <a href="/admin/contents/otherservice/">提携サービス管理</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-movies module">
                            <a href="#" title="Movies アプリケーション内のモデル">
                                Movies<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-m">

                                    <a href="/admin/movies/movie/">動画管理</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-notifications module">
                            <a href="#" title="Notifications アプリケーション内のモデル">
                                Notifications<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-n">

                                    <a href="/admin/notifications/noticefromaf/">フレンズからのお知らせ</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-django_celery_beat module">
                            <a href="#" title="Periodic Tasks アプリケーション内のモデル">
                                Periodic Tasks<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-c">

                                    <a href="/admin/django_celery_beat/clockedschedule/">Clocked</a>

                                </li>


                                <li className="model-c">

                                    <a href="/admin/django_celery_beat/crontabschedule/">Crontabs</a>

                                </li>


                                <li className="model-i">

                                    <a href="/admin/django_celery_beat/intervalschedule/">Intervals</a>

                                </li>


                                <li className="model-p">

                                    <a href="/admin/django_celery_beat/periodictask/">Periodic tasks</a>

                                </li>


                                <li className="model-s">

                                    <a href="/admin/django_celery_beat/solarschedule/">Solar events</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-rankings module">
                            <a href="#" title="Rankings アプリケーション内のモデル">
                                Rankings<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-d">

                                    <a href="/admin/rankings/dailyentryrewardranking/">日別参加者報酬額ランキングs</a>

                                </li>


                                <li className="model-m">

                                    <a href="/admin/rankings/monthlyentryrewardranking/">月別参加者報酬額ランキングs</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-special_price_applicants module">
                            <a href="#" title="Special_Price_Applicants アプリケーション内のモデル">
                                Special_Price_Applicants<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-s">

                                    <a href="/admin/special_price_applicants/specialpriceapplicants/">特単申込者</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-user_details module">
                            <a href="#" title="User_Details アプリケーション内のモデル">
                                User_Details<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-a">

                                    <a href="/admin/user_details/accountasp/">ASP User Accounts</a>

                                </li>


                                <li className="model-s">

                                    <a href="/admin/user_details/serviceprovider/">ASP管理</a>

                                </li>


                                <li className="model-l">

                                    <a href="/admin/user_details/lambdafunctionsasp/">Lambda Functions</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-sites module">
                            <a href="#" title="サイト アプリケーション内のモデル">
                                サイト<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-s">

                                    <a href="/admin/sites/site/">サイト</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-seminars module">
                            <a href="#" title="セミナー一覧 アプリケーション内のモデル">
                                セミナー一覧<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-s">

                                    <a href="/admin/seminars/seminarsite/">セミナー会場管理</a>

                                </li>


                                <li className="model-s">

                                    <a href="/admin/seminars/seminarapplicant/">セミナー申込者一覧</a>

                                </li>


                                <li className="model-s">

                                    <a href="/admin/seminars/seminar/">セミナー管理</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-mails module">
                            <a href="#" title="メール アプリケーション内のモデル">
                                メール<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-m">

                                    <a href="/admin/mails/mailframes/">ヘッダー・フッター管理</a>

                                </li>


                                <li className="model-m">

                                    <a href="/admin/mails/mails/">メール管理</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-parameters_management module">
                            <a href="#" title="流入経路 アプリケーション内のモデル">
                                流入経路<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-p">

                                    <a href="/admin/parameters_management/parametersmanagement/">流入経路管理</a>

                                </li>


                                <li className="model-d">

                                    <a href="/admin/parameters_management/dailyinflowcounts/">流入経路分析 </a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-auth module">
                            <a href="#" title="アカウント管理 アプリケーション内のモデル">
                                アカウント管理<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-p">

                                    <a href="/admin/auth/permission/">パーミッション</a>

                                </li>


                                <li className="model-c">

                                    <a href="/admin/auth/customgroup/">権限管理</a>

                                </li>


                                <li className="model-m">

                                    <a href="/admin/auth/managers/">運営者一覧</a>

                                </li>


                            </ul>
                        </li>

                        <li className="app-report_analysis module">
                            <a href="#" title="集計レポート一覧 アプリケーション内のモデル">
                                集計レポート一覧<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse" aria-expanded="false">


                                <li className="model-a">

                                    <a href="/admin/report_analysis/analysisreports/">集計レポート</a>

                                </li>


                                <li className="model-o">

                                    <a href="/admin/report_analysis/overallreward/">全体 報酬推移</a>

                                </li>


                                <li className="model-a">

                                    <a href="/admin/report_analysis/aspreward/">ASP別 報酬推移</a>

                                </li>


                                <li className="model-m">

                                    <a href="/admin/report_analysis/memberreward/">会員別 報酬推移</a>

                                </li>


                                <li className="model-i">

                                    <a href="/admin/report_analysis/itemreward/">案件別 報酬推移</a>

                                </li>


                                <li className="model-s">

                                    <a href="/admin/report_analysis/sitereward/">サイト別 報酬推移</a>

                                </li>


                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    )
};
