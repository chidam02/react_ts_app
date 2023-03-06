import {all} from "redux-saga/effects"
import userDetailsSagaLister from "../pages/Auth/saga"

export default function * rootSaga(){
    yield all([
        userDetailsSagaLister(),
    ])
}