import React, { Component } from 'react'
import Moment from 'moment'
import * as _ from 'lodash'
import './index.scss'
class Time extends Component {
  state = {
    weatherInputStyle: 'time_weather',
    inputVal:''
  }
  toggleInput= (type)=>{
    let classStyle = type === 'mouse' ? 'time_weather time_weather_active' : 'time_weather'
    this.setState({
      weatherInputStyle: classStyle
    })
  }
  changeVal=(e)=>{
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className='time_board'>
          <div className='time_plate time_plate1'>
          <div>
            <input value={this.state.inputVal} onChange={this.changeVal} onMouseDown={()=>this.toggleInput('mouse')} onBlur={() => this.toggleInput('blur')} type='text' className={`${this.state.weatherInputStyle} mt_40`} />
            <i className={`iconfont ml_10 fs_25 cur_p ${_.trim(this.state.inputVal) ? 'vis_ab':'vis_hd'}`}>&#xe612;</i>
          </div>
            <div className='time_weatherResult mt_20'></div>
            
          </div>
          <div className='time_plate time_plate2'>
          </div>
          <div className='time_plate time_plate3'></div>
        </div>
      </div>
    )
  }
}

export default Time
