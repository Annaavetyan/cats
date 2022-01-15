import * as React from "react";
import './App.css';
import Layout from "./Layout/Layout";
import Main from "./Pages/Main/Main";


const App = () => {

    return (
        <React.Fragment>
            <Layout>
                <Main/>
            </Layout>
        </React.Fragment>
    );
}

export default App;
