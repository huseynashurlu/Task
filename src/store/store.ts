import { createStore } from "redux";


type AppState = {
    repoUrl: string;
  };
  
  const initialState: AppState = {
    repoUrl: '',
  };
  
  type Action = { type: 'SET_REPO_URL'; payload: string };
  
  function reducer(state = initialState, action: Action): AppState {
    switch (action.type) {
      case 'SET_REPO_URL':
        return {
          ...state,
          repoUrl: action.payload,
        };
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);
  
  export default store;