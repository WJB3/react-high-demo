import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(error) {
        //当出现错误时会进入这个生命周期函数
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error);
        console.log(errorInfo);
    }
    render() {
        if (this.state.hasError) {
          // 你可以自定义降级后的 UI 并渲染
          return <h1>代码存在问题</h1>;
        }
    
        return this.props.children; 
    }

}