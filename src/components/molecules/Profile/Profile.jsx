import React, { useState } from "react";
import './Profile.scss';
import Wrapper from "../../../helpers/Wrapper";
import CheckOut from "../../../pages/Checkout/Checkout"
import BrowseHistory from "../../atoms/BrowseHistory/BrowseHistory";
import Dashboard from "../../atoms/Dashboard/Dashboard";
import OrderHistory from "../../atoms/OrderHistory/OrderHistory"

const Profile = () => {
    const [dashBoardValue, setDashBoardValue] = useState("default");
    let renderComp;

    switch (dashBoardValue) {
        case "dashboard":
            break;
        case "orders":
            renderComp = <OrderHistory />
            break;
        case "checkout":
            renderComp = <CheckOut />
            break;
        case "history":
            renderComp = <BrowseHistory />
            break;
        case "settings":
            break;
        case "logout":
            break;
        default:
            break;
    }

    return (
        <Wrapper>
            <div className="profile w-90">
                <div className="dashboard-wrapper">
                    <Dashboard setDashBoardValue={setDashBoardValue} />
                </div>
                {renderComp}
            </div>
        </Wrapper>
    );
}

export default Profile;
