export const UPDATE_TEACHER_ATTENDANCE = 'UPDATE_TEACHER_ATTENDANCE';
export const UPDATE_AVAILABILITY = 'UPDATE_AVAILABILITY';
export const UPDATE_TEACHER_SCHEDULE = 'UPDATE_TEACHER_SCHEDULE';

export const updateTeacherAttendance = (payload, dispatch) => dispatch({ type: UPDATE_TEACHER_ATTENDANCE, payload });

export const updateAvailability = (payload, dispatch) => dispatch({ type: UPDATE_AVAILABILITY, payload });

export const updateTeacherSchedule = (payload, dispatch) => dispatch({ type: UPDATE_TEACHER_SCHEDULE, payload });