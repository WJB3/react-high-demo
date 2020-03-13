import React,{Fragment,Component}  from 'react';
import BoundErrorComponent from '../utils/BoundErrorComponent';
 
export default class Test extends React.Component{

    
    render(){

        const styleObj={
             
        }
    
        return(
            <div style={styleObj}>
                Hello React
                <BoundErrorComponent>
                    <LiComponent />
                </BoundErrorComponent> 
            </div>
        )
    }
}

class LiComponent extends React.Component{
    state={
        arr:new Array(10).fill("测试")
    }
    render(){
        return(
            <div>
                {
                    this.state.arr.map((item,index)=>(
                        <Fragment key={index}>
                            <div>{`测试${index}`}</div>
                        </Fragment>
                    ))
                }
            </div>
        )
    }
}
 
