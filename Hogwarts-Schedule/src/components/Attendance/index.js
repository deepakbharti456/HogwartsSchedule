const Attendance = ({
    props,
    handleAttendanceUpdate
}) => {

    return (
        <>
            <div className="Attendance block">
                <div className="list">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Teacher</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props?.teachers && props?.teachers.map((item, key) => {
                                return (
                                    <tr key={key} >
                                        <th>{item.name} <p>({item.position})</p></th>
                                        <th>
                                            <select
                                                value={item.availability}
                                                data-id={item.name}
                                                onChange={(event) => handleAttendanceUpdate(event)} id={key} className="custom-select">
                                                <option
                                                    value="present"
                                                    defaultValue="present">Present
                                                </option>
                                                <option
                                                    value="absent"
                                                    defaultValue="absent">Absent
                                                </option>
                                            </select>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Attendance;