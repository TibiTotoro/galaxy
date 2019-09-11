import React from 'react';

import topNav from '~store/topNav.js';
import {observer} from 'mobx-react';


@observer class Test extends React.Component{
   
    render(){
        console.log(topNav)
        return (
            <button onClick= {() => topNav.change()} >
                {topNav.formData}
                </button>
        )
    }
}

export default Test;