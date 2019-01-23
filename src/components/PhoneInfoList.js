import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    render() {
        const {data, onRemove, onUpdate} = this.props;
        console.log('rendering list')
        const list = data.map(
            info=>(
            <PhoneInfo 
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info}
                key={info.id}
            />)
            // key는 리엑트 내부에서 렌더링시 렌더링할 각 요소를 구분하게 해준다.
            // 그래서 중복되고 쓸데없는 작업을 줄이고 렌더링 효율을 높여준다.
        );
        return (
            <div>
                {list}      
            </div>
        );
    }
}

export default PhoneInfoList;