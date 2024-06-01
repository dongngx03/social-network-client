import { createSlice } from "@reduxjs/toolkit";

type TState = {
    isOpen: boolean,
    memberList: any[],
    title: string,
    type: "SENDER" | "RECIEVER" | ""
}

const followingSlice = createSlice({
    name: "follows",
    initialState: {
        isOpen: false, // kiểm soát bật, tắt drwar người theo dõi 
        memberList: [],
        title: "",
        type: ""
    } as TState,
    reducers: {
        getMemberListFollowing: (state: TState, action: any) => {
            return action.payload
        }
    }
})

export default followingSlice