import React from "react";
import { Link } from "react-router-dom";
import boxicon1 from '../assets/images/icon-1.png';
import boxicon2 from '../assets/images/icon-2.png';
import boxicon3 from '../assets/images/icon-3.png';
import './assets/css/DashboardBox.css'

function DashboardBox() {
    const boxInfos = [
        {
            "id": 1,
            "boxHeading": "Total Receipts",
            "boxIcon": boxicon1,
            "boxValue": "10,000",
            "pageLink": "/total-payments"
        },
        {
            "id": 2,
            "boxHeading": "Pending Receipts",
            "boxIcon": boxicon2,
            "boxValue": "5,000",
            "pageLink": "/total-payments"
        },
        {
            "id": 3,
            "boxHeading": "Verified Receipts",
            "boxIcon": boxicon3,
            "boxValue": "3,000",
            "pageLink": "/verify-payment"
        }
    ]
    return (
        boxInfos.map(boxInfo => {
            return (
                <div className="col-lg-4 mt-5" key={boxInfo.id}>
                    <Link to={boxInfo.pageLink}  className="box-link">
                        <div className="main-box">
                            <div className="box-heading">
                                <h5>{boxInfo.boxHeading}</h5>
                            </div>
                            <div className="box-icon">
                                <img src={boxInfo.boxIcon} alt={boxInfo.boxIcon} className="img-fluid" />
                            </div>
                            <div className="box-value">
                                <h5>{boxInfo.boxValue}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    );
}

export default DashboardBox
