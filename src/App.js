import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>지역</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);