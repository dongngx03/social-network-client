
export const userInitialState = {
    user: null
}

const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }

        default:
            return state
    }
}

export default userReducer

