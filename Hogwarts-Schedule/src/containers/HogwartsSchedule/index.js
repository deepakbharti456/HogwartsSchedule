import { useEffect, useReducer } from "react";
import Attendance from "../../components/Attendance";
import Schedule from "../../components/Schedule";
import ScheduleReducer from "./reducer";
import { updateTeacherAttendance, updateTeacherSchedule } from "./action";

const HogwartsSchedule = () => {
    const [state, dispatch] = useReducer(ScheduleReducer, ScheduleReducer());

    const teacherSchedule = [
        {
            'name': 'Harry Potter',
            'subject': 'Potions Master',
            'teacher': 'Horace Slughorn',
            'idTeacher': 4,
        },
        {
            'name': 'Hermione Granger',
            'subject': 'Potions Master',
            'teacher': '',
            'idTeacher': 0,
        },
        {
            'name': 'Ron Weasley',
            'subject': 'Potions Master',
            'teacher': 'Severus Snape',
            'idTeacher': 5,
        },
        {
            'name': 'Draco Malfoy',
            'subject': 'Potions Master',
            'teacher': 'Horace Slughorn',
            'idTeacher': 4,
        },
        {
            'name': 'Padma Patil',
            'subject': 'Potions Master',
            'teacher': '',
            'idTeacher': '',
        },
        {
            'name': 'Luna Lovegood',
            'subject': 'Potions Master',
            'teacher': 'Severus Snape',
            'idTeacher': 5,
        },
    ];

    const teachers = [
        {
            'name': 'Professor Dumbledore',
            'position': 'Headmaster',
            'id': 1,
            'idParent': 0,
            'availability': 'present',
        },
        {
            'name': 'Minerva McGonagall',
            'position': 'Headmistress',
            'id': 2,
            'idParent': 1,
            'availability': 'absent',
        },
        {
            'name': 'Rubeus Hagrid',
            'position': 'Potions Master',
            'id': 3,
            'idParent': 2,
            'availability': 'absent',
        },
        {
            'name': 'Horace Slughorn',
            'position': 'teacher',
            'id': 4,
            'idParent': 2,
            'availability': 'present',
        },
        {
            'name': 'Severus Snape',
            'position': 'teacher',
            'id': 5,
            'idParent': 2,
            'availability': 'present',
        },
        {
            'name': 'Defense Against the Dark Arts',
            'position': 'Potions Master',
            'id': 6,
            'idParent': 2,
            'availability': 'absent',
        },
        {
            'name': 'Remus Lupin',
            'position': 'teacher',
            'id': 7,
            'idParent': 5,
            'availability': 'present',
        },
        {
            'name': 'Gilderoy Lockhart',
            'position': 'teacher',
            'id': 8,
            'idParent': 5,
            'availability': 'present',
        }
    ]

    useEffect(() => {
        // Assuming data will come up via API but using MOCK DATA here
        updateTeacherAttendance(teachers, dispatch);
        updateTeacherSchedule(teacherSchedule, dispatch);
    }, []);

    const handleAttendanceUpdate = (data) => {
        const updatedAttendance = [];
        state?.teachers.map((item) => {
            if (item.name === data.target.getAttribute('data-id')) {
                item.availability = data.target.value;
            }
            updatedAttendance.push(item);
        })
        updateTeacherAttendance(updatedAttendance, dispatch);
    }

    useEffect(() => {
        let updatedSchedule = [];
        if (state?.teachers.length) {
            state?.teacherSchedule.map((item) => {

                if (item.idTeacher) {
                    let teacherDetail = getTeacherDetails(item.idTeacher);
                    if (teacherDetail && teacherDetail.availability == 'absent') {
                        let presentTeacher = findParent(item.idTeacher);
                        if (presentTeacher) {
                            item.idTeacher = presentTeacher.id;
                            item.teacher = presentTeacher.name;
                        } else {
                            const teacher = getTeacherBySubject(item);
                            if (teacher) {
                                item.idTeacher = teacher.id;
                                item.teacher = teacher.name;
                            } else {
                                item.idTeacher = 0;
                                item.teacher = 'Not Assigned';
                            }
                        }
                    }
                } else {
                    const teacher = getTeacherBySubject(item);
                    if (teacher) {
                        item.idTeacher = teacher.id;
                        item.teacher = teacher.name;
                    } else {
                        item.idTeacher = 0;
                        item.teacher = 'Not Assigned';
                    }
                }
                updatedSchedule.push(item);
            })
            updateTeacherSchedule(updatedSchedule, dispatch);
        }
    }, [state?.teachers])

    const getTeacherBySubject = (teacher) => {
        const availableTeacher = state?.teachers
            .filter((item) => {
                if (item.position === teacher.subject && item.availability == 'present') {
                    return item;
                }
            })
        if (availableTeacher.length) {
            return availableTeacher[0];
        } else {
            const teacherDetail = getTeacherDetailByPosition(teacher.subject);
            if (teacherDetail) {
                const parent = findParent(teacherDetail.id);
                if (parent) {
                    return parent;
                }
            }
        }
        return false;
    }

    const getTeacherDetailByPosition = (position) => {
        let data;
        state?.teachers
            .filter((item) => item.position === position)
            .map((item) => {
                if (item) {
                    data = item;
                }
            })
        return data
    }

    const getTeacherDetails = (idTeacher) => {
        let availabilityData;
        state?.teachers
            .filter((item) => item.id === idTeacher)
            .map((item) => {
                if (item) {
                    availabilityData = item;
                }
            })
        return availabilityData
    }

    const findParent = (idTeacher) => {
        let parent = null;
        state?.teachers
            .filter((item) => item.id === idTeacher)
            .map((item) => parent = item)

        if (parent && parent.availability == 'absent') {
            return findParent(parent.idParent);
        }
        return parent;
    }
    return (
        <>
            <Attendance
                props={state}
                handleAttendanceUpdate={handleAttendanceUpdate}
            />
            <Schedule
                props={state}
            />
        </>
    );
}

export default HogwartsSchedule;