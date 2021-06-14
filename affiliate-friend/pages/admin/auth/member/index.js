import React from "react";
import {useState, useEffect} from "react";
import SideBar from "../../../../src/components/left-menu";
import BaseLayout from "../../../../src/layout/base-layout";

function TestPanel() {

    return (
        <>
            <BaseLayout>
            <SideBar></SideBar>
            </BaseLayout>
        </>
    )
}

export default TestPanel;