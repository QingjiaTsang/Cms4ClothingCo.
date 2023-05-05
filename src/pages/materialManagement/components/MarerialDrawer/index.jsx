import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Upload,
} from 'antd';

const columns = [
  {
    title: '订单',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '产品',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: '商品id',
    dataIndex: 'goodsId',
    key: 'goodsId',
  },
  {
    title: '供应商',
    dataIndex: 'supplier',
    key: 'supplier',
  },
  {
    title: '供应商id',
    dataIndex: 'supplierId',
    key: 'supplierId',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '数量',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '小计',
    dataIndex: 'subtotal',
    key: 'subtotal',
  },
];

// dummy data
const data = [
  {
    order: 'D20230401',
    date: '2023/04/01',
    product: '潮T',
    goodsId: 'I53539',
    supplier: '新年代布料',
    supplierId: 'F43538',
    price: '10',
    amount: '321',
    subtotal: '3210',
  },
];

export default ({ isDrawerVisible, onDrawerClose }) => {
  return (
    <Drawer
      title="新建原料&工艺"
      width={800}
      open={isDrawerVisible}
      onClose={onDrawerClose}
      bodyStyle={{
        paddingBottom: 80,
      }}
      footer={
        <div style={{ float: 'right' }}>
          <Space>
            <Button onClick={onDrawerClose}>取消</Button>
            <Button onClick={onDrawerClose} type="primary">
              确定
            </Button>
          </Space>
        </div>
      }
    >
      <Form layout="vertical">
        <Row gutter={18}>
          <Col span={8}>
            <Form.Item
              name="name"
              label="名称"
              rules={[
                {
                  required: true,
                  message: 'Please enter user name',
                },
              ]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="id" label="Id">
              <Input placeholder="系统生成" disabled={true} />
            </Form.Item>
          </Col>
          <div style={{ position: 'absolute', right: 150 }}>
            <Form.Item
              name="avatar"
              label="上传图片"
              rules={[
                {
                  required: true,
                  message: 'Please enter avatar',
                },
              ]}
            >
              <Upload listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </div>
        </Row>
        <Row gutter={18}>
          <Col span={8}>
            <Form.Item
              name="type"
              label="分类"
              rules={[
                {
                  required: true,
                  message: 'Please enter type',
                },
              ]}
            >
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="secondType" label="二级分类">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={8}>
            <Form.Item name="recentPrice" label="单价">
              <InputNumber placeholder="请输入数字" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="supplier" label="供应商">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="goods" label="商品">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="memo" label="备注">
              <Input.TextArea
                allowClear
                placeholder="请输入"
                style={{ height: 100, resize: 'none' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                right: 110,
              }}
            >
              总计: 2
            </div>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
