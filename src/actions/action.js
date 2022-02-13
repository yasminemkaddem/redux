export const addNewTask = (val) => {
    return {
      type: "ADD_TASK",
      payload: val,
    };
  };
  
  
  
  export const compTask = (id) => {
    return {
      type: "COMPLETE_TASK",
      payload: id,
    };
  };
  
  export const editTask = (x) => {
    return {
      type: "EDIT_TASK",
      payload: x,
    };
  };
  
  export const filterTask = (x) => {
    return {
      type: "FILTER_TASK",
      payload: x,
    };
  };
  