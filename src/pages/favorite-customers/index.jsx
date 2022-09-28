import { Button, notification, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptyFavoritesAction, removeFromFavoritesAction } from '../../redux/actions/customers.actions';

const FavoriteCustomers = () => {

  const favoriteCustomers = useSelector(state => state)

  const dispatch = useDispatch();

  const handleRemove = (customer) => {
    if (window.confirm('Are you sure??')) {
      dispatch(removeFromFavoritesAction(customer))
      openNotification();
    }
  }

  const handleRemoveAll = () => {
    console.log(favoriteCustomers.length);
    if (favoriteCustomers.length !== 0) {
      if (window.confirm('Are you sure??')) {
        dispatch(emptyFavoritesAction())
      }
    }
  }

  const openNotification = () => {
    notification.info({
      message: 'Customer Removed from Favorites!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Customer Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (address) => <p>{address.city}, {address.country}</p>,
    },
    {
      title: 'Phone',
      dataIndex: 'address',
      key: 'adress',
      render: (address, record) => <p>{address.phone}</p>,
    },
    {
      title: "Remove",
      dataIndex: "id",
      key: "id",
      render: (value, data) => <Button onClick={() => handleRemove(data)} type='primary' danger>Remove</Button>,
    }
  ];
  return (
    <div>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>Count of Favorit Customers: {favoriteCustomers.length}</h1>
        <Button onClick={handleRemoveAll} type='primary' danger>Empty All</Button>
      </div>
      <Content style={{ padding: '0 100px' }}>
        <Table columns={columns} dataSource={favoriteCustomers} rowKey='id' />
      </Content>

    </div>
  )
}

export default FavoriteCustomers