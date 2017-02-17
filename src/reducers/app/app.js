const START_SESSION = 'START_SESSION';

export function startSession() {
  return {
    type: START_SESSION,
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
    default:
      return state;
  }
}
