import React, {Component} from "react";
import Preloader from "../Common/Preloader/Preloader";

export const withSuspense = (Component) => {

    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component/>
        </Suspense>
    }
};

// поебень нахуй     ненужная!!!!!
