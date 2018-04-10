import {combineEpics} from 'redux-observable';

import epics from '../modules/auth/epics';

export default combineEpics(...epics);