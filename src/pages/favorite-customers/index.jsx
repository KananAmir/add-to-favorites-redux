import { Button, Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavoritesAction } from '../../redux/actions/customers.actions';

const FavoriteCustomers = () => {

  const favoriteCustomers = useSelector(state => state)

  const dispatch = useDispatch();

  const handleRemove = (customer) => {
    dispatch(removeFromFavoritesAction(customer))
  }
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
      render: (value, data) => <Button onClick={() => handleRemove(data)} style={{ backgroundColor: 'red', color: 'white' }}>Remove</Button>,
    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={favoriteCustomers} rowKey='id' />
    </div>
  )
}

export default FavoriteCustomers