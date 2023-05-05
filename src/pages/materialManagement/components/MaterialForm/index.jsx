import { Button, Card, Divider, Form, Select, Typography } from 'antd';
import './index.less';

export default (props) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="formContainer">
      <Card>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item>
            <Typography.Title level={4}>原料及工艺管理</Typography.Title>
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="类型" className="formItem">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="二级分类" className="formItem">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="供应商名称/id" className="formItem">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="商品名称/id" className="formItem">
              <Select placeholder="请选择">
                <Select.Option value="option1">选项1</Select.Option>
                <Select.Option value="option2">选项2</Select.Option>
                <Select.Option value="option3">选项3</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div
            style={{
              float: 'right',
              display: 'flex',
              justifyContent: 'space-between',
              width: 140,
              marginRight: 10,
            }}
          >
            <Form.Item>
              <Button htmlType={'submit'} type="primary">
                搜索
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={handleReset}>重置</Button>
            </Form.Item>
          </div>
          <Divider />
        </Form>
      </Card>
    </div>
  );
};
