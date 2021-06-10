import Link from 'next/link'
import style from  "../../styles/card.module.css"


function Card(props) {
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className={`${props.classNames.panel}`}>
                    <div className={`card-header ${style.cardHeader}`}>
                        <div className="row">
                            <div className="col-xs-3">
                                {props.icon}
                            </div>
                            <div className="col-xs-9 text-lg-end">
                                <div className={style.huge}>{props.number}</div>
                                <div>{props.name}</div>
                            </div>
                        </div>
                    </div>
                    <Link  href={props.href}>
                        <a>
                            <div className={`card-footer card_cardFooter__m89g2`}>
                                <span className="float-start">{props.descLink}</span>
                                <span className="float-end">{props.footerIcon}</span>

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