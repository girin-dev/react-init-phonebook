import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './App.css';

class App extends Component {
  id=3;
  state={
    information:[{
      id:0,
      name:'홍길동',
      phone:'010-0000-000'
    },{
      id:1,
      name:'홍길',
      phone:'010-0000-000'
    },{
      id:2,
      name:'홍',
      phone:'010-0000-000'
    },],
    keyword: '',
  }
  handleChange=e=>{
    this.setState({
      keyword:e.target.value
    })
  }
  handleCreate=data=>{
    const {information} = this.state;
    this.setState({
      information: information.concat(Object.assign({},data,{
        id:this.id++
      }))
    })
  }
  handleRemove=id=>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info=>info.id !== id)
    });
  }
  handleUpdate=(id,data)=>{
    const {information} = this.state;
    this.setState({
      information: information.map(info=>{
        if(info.id===id){
          return {
            id,
            ...data,
          };
        }
        return info;
      })
    });
  }
  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."  
        />
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList 
          onRemove={this.handleRemove}
          data={this.state.information.filter(
            info=>info.name.indexOf(this.state.keyword) > -1
          )}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
