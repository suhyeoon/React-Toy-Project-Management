import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'phone': '010-1111-1111',
    'area': '서울특별시'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이순신',
    'phone': '010-2222-2222',
    'area': '경기도'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이황',
    'phone': '010-3333-3333',
    'area': '부산광역시'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                phone={c.phone}
                area={c.area}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;