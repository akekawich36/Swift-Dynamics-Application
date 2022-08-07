import React from "react";
import CreateUser from "./features/user/CreateUser";
import Member from "./features/user/Member";
import "./App.css"


function App() {

    return (
        <div className="App">
            <CreateUser />
            <div className="Showmember">
                <Member/>
            </div>
        </div>
    );
}

export default App;
