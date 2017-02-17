const START_SESSION = 'START_SESSION';
const DURATION_CHANGE_SESSION = 'DURATION_CHANGE_SESSION';
const DURATION_CHANGE_BREAK = 'DURATION_CHANGE_BREAK';

export function startSession() {
  return {
    type: START_SESSION,
  };
}

export function durationChangeSession(value) {
  return {
    type: DURATION_CHANGE_SESSION,
    value,
  };
}

export function durationChangeBreak(value) {
  return {
    type: DURATION_CHANGE_BREAK,
    value,
  };
}

const initialState = {
  sessionDuration: 25,
  breakDuration: 5,
  sessionsCompleted: 0,
  sessionTimeCompleted: 0,
  sessionsCancelled: 0,
  sessionStarted: false,
  sessionPaused: false,
  sessionResumed: false,
  sessionCancelled: false,
  breakStarted: false,
  breakCompleted: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case START_SESSION:
      return {
        ...state,
        sessionStarted: true,
      };
    case DURATION_CHANGE_SESSION:
      return {
        ...state,
        sessionDuration: action.value,
      };
    case DURATION_CHANGE_BREAK:
      return {
        ...state,
        breakDuration: action.value,
      };
    default:
      return state;
  }
}
