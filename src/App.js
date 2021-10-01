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
        <Customer
          id={customer[0].id}
          image={customer[0].image}
          name={customer[0].name}
          phone={customer[0].phone}
          area={customer[0].area}
        />
        <Customer
          id={customer[1].id}
          image={customer[1].image}
          name={customer[1].name}
          phone={customer[1].phone}
          area={customer[1].area}
        />
        <Customer
          id={customer[2].id}
          image={customer[2].image}
          name={customer[2].name}
          phone={customer[2].phone}
          area={customer[2].area}
        />
      </div>
    );
  }
}

export default App;