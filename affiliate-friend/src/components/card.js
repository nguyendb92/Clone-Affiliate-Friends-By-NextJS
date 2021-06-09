import Link from 'next/link'
// import "../../styles/card.module.scss"

function Card(props) {
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className={props.classNames.panel}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-xs-3">
                                <i className={props.classNames.headerIcon}></i>
                            </div>
                            <div className="col-xs-9 text-right">
                                <div className="huge">{props.number}</div>
                                <div>{props.name}</div>
                            </div>
                        </div>
                    </div>
                    <Link  href={props.href}>
                        <a>
                            <div className="card-footer">
                                <span className="pull-left">{props.descLink}</span>
                                <span className="pull-right"><i className={props.classNames.footerIcon}></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card;