import React, { Component } from 'react';

import "antd/dist/antd.css";
import { Input, Button,Tag,List } from "antd";

class Counter extends React.Component {
    state={
        counter:0,
        toDoList:[]
    }
    handleIncrement = ()=>{
        // console.log('button');
        // this.state.counter++;
        var room = this.state.counter;
        this.state.counter = room+1;
        this.state.toDoList.push(this.state.counter);
        
        // console.log(this.state.counter)
        this.setState(this.state);
    }
    init = ()=>{
        this.state.counter = 0;
        this.state.toDoList = [];
        this.setState(this.state);
    }
    handleDecrement = ()=>{
        // console.log('button');
        //if(this.state.counter<=0){
            console.log('button');
            if(this.state.counter > 0){
            var room = this.state.counter -1
            this.state.counter = room;
            room = this.state.toDoList.pop();
            this.state.toDoList.push(this.state.counter)
            this.setState(this.state)
            }
        //}else{
            //this.setState({counter:this.state.toDoList.length-1,toDoList:this.state.toDoList.slice(0,1)})
        //}
    }
    formatCount(){
        return this.state.counter===0 ? <Tag color="yellow">Zero</Tag> :<Tag color="green">{this.state.counter}</Tag>
    }
    render() { 
        return  <div>
                    <h5>made by ikin#453</h5>
                    <h1>Counter</h1>
                    <br/>
                    <Button type ="primary" onClick={this.init}> Initialize </Button>
                    <br/>
                    {this.formatCount()}
                    <Button shape="round" onClick={this.handleIncrement}> plus </Button>
                    <Button shape="round" onClick={this.handleDecrement}> minus</Button>
                    <br/>
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.toDoList}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>;
    }
}

export default Counter;
