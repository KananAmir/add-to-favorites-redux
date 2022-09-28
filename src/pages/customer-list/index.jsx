import React, { useEffect, useState } from 'react'
import { customerServices } from '../../services/requests'
import { Table, Button } from 'antd';
import 'antd/dist/antd.min.css';

const CustomerList = () => {

  const [customers, setSustomers] = useState([]);

  useEffect(() => {
    customerServices.getAllCustomers()
      .then(data => setSustomers(data),
        console.log(customers))
  }, [])


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
      render: (address, record) => <p>{address.city}, {address.country}</p>,
    },
    {
      title: 'Phone',
      dataIndex: 'address',
      key: 'adress',
      render: (address, record) => <p>{address.phone}</p>,
    },
    {
      title: "Add to Favorites",
      dataIndex: "id",
      key: "id",
      render: (favorite, record) => <Button style={{ backgroundColor: 'teal', color: 'white' }}>Add to Favorites</Button>,
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={customers} />
    </div>
  )
}

export default CustomerList