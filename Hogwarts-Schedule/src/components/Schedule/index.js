const Schedule = ({ props }) => {
    return (
        <div className="schedule">
            <div className="schedule-time">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Student</th>
                            <th>Subject</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.teacherSchedule && props?.teacherSchedule.map((item, key) => {
                            return (
                                <tr key={key} >
                                    <th>{item.name}</th>
                                    <th>{item.subject}</th>
                                    <th>{item.teacher}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Schedule;