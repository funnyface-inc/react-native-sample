/**
 * @fileoverview BookListComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';
import mock from './mock';

export default class BookList extends Component {

  constructor() {
    super();
    this.state = {
      list: mock,
    };
    this._refreshData = this._refreshData.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  componentDidMount() {
    this._refreshData();
  }

  createItem(data) {
    const { item } = data;
    return (
      <Item title={item.title} author={item.author} image={item.book_image} />
    );
  }

  _refreshData() {
    this.setState({
      list: mock,
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={this.createItem}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    );
  }
}
