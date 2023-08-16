import React from "react";
import Datatables from '../components/CustomDatatables';

function TotalPayment() {
    return (
        <div className="container mt-5">
            <div className="main-page-heading mb-4">
                <h3>Total Payments List</h3>
            </div>
            <div className="page-datatables">
                {/* <DataTable
                    pagination
                    columns={columns}
                    data={data}
                    sortIcon={sortIcon}
                    progressPending={pending}
                /> */}
                <Datatables />
            </div>
        </div>
    )
}

export default TotalPayment
