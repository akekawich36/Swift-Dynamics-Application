import { createSlice } from "@reduxjs/toolkit";

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
    );
}

const initialState = {
    list: [
        {
            id: "test1",
            Firstname: "Ratvadee",
            Lastname: "Sagorik",
            gender: "Female",
            MobliePhone: "+66087986651",
            Nationality: "THAI",
        },
        {
            id: "test2",
            Firstname: "Kangsadan",
            Lastname: "Poosee",
            gender: "Female",
            MobliePhone: "+66082787499",
            Nationality: "THAI",
        },
        {
            id: "test3",
            Firstname: "Risa",
            Lastname: "Pansakul",
            gender: "Female",
            MobliePhone: "+660819952782",
            Nationality: "THAI",
        },
        {
            id: "test4",
            Firstname: "Sawi",
            Lastname: "Tri",
            gender: "Female",
            MobliePhone: "+660720119988",
            Nationality: "AMERICAN",
        },
        {
            id: "test5",
            Firstname: "Ratvadee",
            Lastname: "Sagorik",
            gender: "Male",
            MobliePhone: "+660939077830",
            Nationality: "LAOS",
        },
    ],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state, action) => {
            let list = state.list;
            action.payload.id = guidGenerator();
            list.push(action.payload);
            state.list = list;
        },
        update: (state, action) => {
            let list = state.list
            list = action.payload
            state.list = list
        },
    },
});

export const { add , update } = userSlice.actions;

export const selectUser = (state) => state.user.list;

export default userSlice.reducer;
