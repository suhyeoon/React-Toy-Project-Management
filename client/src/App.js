import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi();
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

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
            {this.state.customers ? // 값이 존재하는 경우 실행 
              this.state.customer.map(c => {
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
              : "" //참이 아닐 경우 공백
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if (X > 0) {
    console.log(Y > 0 ? 1 : 4);
  } else {
    console.log(Y > 0 ? 2 : 3);
  }

  process.exit();
});