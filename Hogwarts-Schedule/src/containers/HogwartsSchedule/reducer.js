// @Initial State

import {
    UPDATE_AVAILABILITY,
    UPDATE_TEACHER_ATTENDANCE,
    UPDATE_TEACHER_SCHEDULE
} from "./action";


const INITIAL_STATE = {
    teachers: [],
    availability: [
        {
            'title': 'Present',
            'value': 'present'
        },
        {
            'title': 'Absent',
            'value': 'absent'
        },
    ],
    teacherSchedule: [],
};

const ScheduleReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case UPDATE_TEACHER_ATTENDANCE:
            return {
                ...state,
                teachers: action.payload,
            };
        case UPDATE_AVAILABILITY:
            return {
                ...state,
                availability: action.payload,
            };
        case UPDATE_TEACHER_SCHEDULE: {
            return {
                ...state,
                teacherSchedule: action.payload,
            };
        }
        default:
            return state;
    }
};

export default ScheduleReducer;
