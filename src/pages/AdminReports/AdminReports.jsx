import "./AdminReports.css";

function AdminReports() {

    const categoryData = [
        { category: "Road", total: 35 },
        { category: "Garbage", total: 25 },
        { category: "Water Supply", total: 20 },
        { category: "Street Light", total: 18 },
        { category: "Electricity", total: 12 },
        { category: "Others", total: 10 },
    ];

    const monthlyData = [
        { month: "January", total: 18 },
        { month: "February", total: 25 },
        { month: "March", total: 32 },
        { month: "April", total: 45 },
        { month: "May", total: 50 },
    ];

    return (
        <div className="reports-page">

            <div className="container">

                <h1>Reports & Analytics</h1>

                <p>
                    View complaint statistics and overall system performance.
                </p>

                <div className="report-cards">

                    <div className="report-card">
                        <h2>120</h2>
                        <p>Total Complaints</p>
                    </div>

                    <div className="report-card">
                        <h2>90</h2>
                        <p>Resolved</p>
                    </div>

                    <div className="report-card">
                        <h2>20</h2>
                        <p>Pending</p>
                    </div>

                    <div className="report-card">
                        <h2>10</h2>
                        <p>In Progress</p>
                    </div>

                </div>

                <div className="report-section">

                    <div className="report-table">

                        <h2>Complaint Categories</h2>

                        <table>

                            <thead>

                                <tr>
                                    <th>Category</th>
                                    <th>Total</th>
                                </tr>

                            </thead>

                            <tbody>

                                {categoryData.map((item) => (

                                    <tr key={item.category}>
                                        <td>{item.category}</td>
                                        <td>{item.total}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <div className="report-table">

                        <h2>Monthly Reports</h2>

                        <table>

                            <thead>

                                <tr>
                                    <th>Month</th>
                                    <th>Total</th>
                                </tr>

                            </thead>

                            <tbody>

                                {monthlyData.map((item) => (

                                    <tr key={item.month}>
                                        <td>{item.month}</td>
                                        <td>{item.total}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminReports;