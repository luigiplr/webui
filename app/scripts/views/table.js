import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import {
    addr
}
from './typography'


export
default class Table extends React.Component {

    static propTypes: {
        table: React.PropTypes.array,
        children: React.PropTypes.array
    };

    render() { 
      <Table responsive >
        <tbody>
          {this.props.table.map(val => return <tr><td>{addr(val)}</td></tr>)}
          {this.props.children}
        </tbody> 
      </Table>
    );
};