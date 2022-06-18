import { loginSuccess } from "../constants/constants";

export default function loginReducer(state=[], action) {
    switch (action.type) {
        case loginSuccess:
            return [
                ...state,
                {loginData:action.data}
            ]
        default:
            return state
    }

}