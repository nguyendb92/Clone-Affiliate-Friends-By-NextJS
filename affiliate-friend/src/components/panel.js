import Card from "./card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                    }
                } href="/admin/user_details/serviceprovider"
                      icon={<FontAwesomeIcon icon="user-secret" size="5x"/>}
                      footerIcon={<FontAwesomeIcon icon="arrow-circle-right"/>}
                />
                <Card name="運営者" descLink="詳細を見る" number="38" classNames={
                    {
                        panel: "card bg-success",
                    }
                } href="/admin/auth/managers/"
                      icon={<FontAwesomeIcon icon="user" size="5x"/>}
                      footerIcon={<FontAwesomeIcon icon="arrow-circle-right"/>}
                />

                <Card name="権限管理" descLink="詳細を見る" number="24" classNames={
                    {
                        panel: "card bg-warning",
                    }
                } href="/admin/auth/customgroup/"
                      icon={<FontAwesomeIcon icon="users" size="5x"/>}
                      footerIcon={<FontAwesomeIcon icon="arrow-circle-right"/>}
                />

                <Card name="権限管理" descLink="詳細を見る" number="47" classNames={
                    {
                        panel: "card bg-danger",
                    }
                } href="/admin/auth/member/"
                      icon={<FontAwesomeIcon icon="user" size="5x"/>}
                      footerIcon={<FontAwesomeIcon icon="arrow-circle-right"/>}
                />
            </div>
        </>
    )
}


export default Panel;