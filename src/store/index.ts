import createSagaMiddleware from "@redux-saga/core"
import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import userDetailsReducer, { initialState as userDetailsInitialState } from "../pages/Auth/slice";
import rootSaga from "./rootSaga";


export default function configureAppStore(preloadedState: PreloadedState<any>) {
     // Reducers
     const rootReducer = combineReducers({
        userDetails: userDetailsReducer
    })


    // midddleware
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];


    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({serializableCheck: false}).concat(middlewares);
        },
        preloadedState: preloadedState,

        devTools: true,
    });

    //run saga
    sagaMiddleware.run(rootSaga)

    return store;
}


export const appInitialState = {
    userDetails: userDetailsInitialState,
}

export type RootType = typeof appInitialState;
   





    

 
 