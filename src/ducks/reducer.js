const initialState = {
  userId: 0,
  username: '',
  eventList: []
}

const SET_USER = 'SET_USER'
const CLEAR_USER = 'CLEAR_USER'
const SET_EVENTS = 'SET_EVENTS'

export function setUser(userObj) {
  return {
    type: SET_USER,
    payload: { ...userObj }
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: { ...initialState }
  }
}

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload }
    case CLEAR_USER:
      return { ...action.payload }
    case SET_EVENTS:
      return { ...state, eventList: [...action.payload]}

    default:
      return state
  }
}
