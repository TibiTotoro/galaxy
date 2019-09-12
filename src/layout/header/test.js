import React from 'react';

<<<<<<< HEAD:src/layout/header/test.js
import topNav from '~st/topNav.js';
=======
import topNav from '~store/topNav.js';
>>>>>>> 563db0f8d26f69de3502ca681d2f5b505141b0be:src/components/test.js
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