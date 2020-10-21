import { ADD_APPLICATION, DELETE_APPLICATION, DELETE_ALL_APPLICATIONS} from '../constants';

export const addApplication = (name, title, location, appDate, followUpDate) => {
    const action = {
      type: ADD_APPLICATION,
      name,
      title,
      location,
      appDate,
      followUpDate
    };
    return action;
}

export const deleteApplication = (id) => {
    const action = {
      type: DELETE_APPLICATION,
      id
    };
    return action;
  }

export const deleteAllApplications = () => {
    const action = {
      type: DELETE_ALL_APPLICATIONS,
    };
    return action;
  } 