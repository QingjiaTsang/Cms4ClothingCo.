import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Card, Table } from 'antd';
import MaterialDrawer from '../MarerialDrawer';
import styles from './index.less';

// dummy data
const data = [
  {
    id: '0',
    name: '99%棉布白',
    type: '主面料',
    secondType: '主面料；辅料；',
    recentPrice: '11',
    initialPrice: '13',
    supplier: '长新布行；世纪面料；',
    goods: '潮T001；卫衣008；',
  },
];

export default (props) => {
  const [materialManagementInfo, setMaterialManagementInfo] = useState({
    isDrawerVisible: false,
    selectedRowKeys: [],
  });

  const { isDrawerVisible, selectedRowKeys } = materialManagementInfo;

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '二级分类',
      dataIndex: 'secondType',
      key: 'secondType',
    },
    {
      title: '近期单价',
      dataIndex: 'recentPrice',
      key: 'recentPrice',
    },
    {
      title: '初始单价',
      dataIndex: 'initialPrice',
      key: 'initialPrice',
    },
    {
      title: '供应商',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: '商品',
      dataIndex: 'goods',
      key: 'goods',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (_, record) => {
        return (
          <Button
            type="link"
            onClick={() => {
              setMaterialManagementInfo((preState) => ({
                ...preState,
                isDrawerVisible: true,
              }));
            }}
          >
            详情
          </Button>
        );
      },
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setMaterialManagementInfo((preState) => ({
      ...preState,
      selectedRowKeys: newSelectedRowKeys,
    }));
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDrawerClose = () => {
    setMaterialManagementInfo((preState) => ({
      ...preState,
      isDrawerVisible: false,
    }));
  };

  return (
    <div className={styles.tableContainer}>
      <Card>
        <Button
          onClick={() => {
            setMaterialManagementInfo((preState) => ({
              ...preState,
              isDrawerVisible: true,
            }));
          }}
        >
          新建原料&工艺
        </Button>
        <Table
          columns={columns}
          dataSource={data}
          rowSelection={rowSelection}
          rowKey={(record) => record.id}
        />
      </Card>
      <MaterialDrawer
        onDrawerClose={handleDrawerClose}
        isDrawerVisible={isDrawerVisible}
      />
    </div>
  );
};
