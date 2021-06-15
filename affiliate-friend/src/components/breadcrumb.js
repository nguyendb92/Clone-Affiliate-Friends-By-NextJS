import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {Breadcrumb} from "antd";

const convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .toUpperCase();
};

const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((link, i) => {
                return {breadcrumbName: link, path: '/' + linkPath.slice(0, i + 1).join('/')};
            });
            console.log("SET BREAKCUMB", pathArray)
            setBreadcrumbs(pathArray);
        }

    }, [router]);

    useEffect(
        () =>
        {
            console.log("ROUTER", breadcrumbs)
        }
    )
    function itemRender(route, params, routes, paths) {
        console.log("Route", route, "Params", params, "routes", routes, "paths", paths)
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link href={route.path}>{route.breadcrumbName}</Link>
        )
    }

    if (!breadcrumbs || breadcrumbs.length === 1) {
        return null;
    }

    return (
        <>
            <Breadcrumb style={{
                fontSize: "20px",
                padding: "10px"
            }} itemRender={itemRender} routes={breadcrumbs}/>
        </>
    )

}

export default Breadcrumbs;