import Card from "./card"
import "./fontawesome";

function Panel() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
            <div className="row">
                <Card name="ASP管理" descLink="詳細を見る" number="11" classNames={
                    {
                        panel: "card bg-primary",
                        headerIcon: "fa fa-user-secret fa-5x",
                        footerIcon: "fa fa-arrow-circle-right",
                    }
                } href="/admin/user_details/serviceprovider"/>
                <Card name="運営者" descLink="詳細を見る" number="38" classNames={
                    {
                        panel: "card bg-success",
                        headerIcon: "fa fa-user fa-5x",
                        footerIcon: "fa fa-arrow-circle-right",
                    }
                } href="/admin/auth/managers/"/>

                <Card name="権限管理" descLink="詳細を見る" number="24" classNames={
                    {
                        panel: "card bg-warning",
                        headerIcon: "fa fa-group fa-5x",
                        footerIcon: "fa fa-arrow-circle-right",
                    }
                } href="/admin/auth/customgroup/"/>

                <Card name="権限管理" descLink="詳細を見る" number="47" classNames={
                    {
                        panel: "card bg-danger",
                        headerIcon: "fa fa-user fa-5x",
                        footerIcon: "fa fa-arrow-circle-right"
                    }
                } href="/admin/auth/member/"/>
            </div>
        </>
    )
}


export default Panel;