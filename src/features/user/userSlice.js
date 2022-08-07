import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

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
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        add: (state, action) => {
            let list = state.list;
            action.payload.id = guidGenerator();
            list.push(action.payload);
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.list = list;
        },
        update: (state, action) => {
            let list = state.list
            debugger
            list = action.payload
            debugger
            state.list = list
        },
    },
});

export const { add , update } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.list;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
