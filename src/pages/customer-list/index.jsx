import React, { useEffect, useState } from 'react'
import { customerServices } from '../../services/requests'
import { Table, Button } from 'antd';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoritesAction } from '../../redux/actions/customers.actions';

const CustomerList = () => {

  const [customers, setSustomers] = useState([]);
  const dispatch = useDispatch();
  const favoriteCustomers = useSelector(state => state)

  useEffect(() => {
    customerServices.getAllCustomers()
      .then(data => setSustomers(data))
  }, [])

  const addToFavorites = (customer) => {
    if (!favoriteCustomers.includes(customer)) {
      dispatch(addToFavoritesAction(customer));
    }
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
      render: (address) => <p>{address.phone}</p>,
    },
    {
      title: "Add to Favorites",
      dataIndex: "id",
      key: "id",
      render: (value, data) => <Button onClick={() => addToFavorites(data)} style={{ backgroundColor: 'teal', color: 'white' }}>Add to Favorites</Button>,
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={customers} rowKey='id' />
    </div>
  )
}

export default CustomerList