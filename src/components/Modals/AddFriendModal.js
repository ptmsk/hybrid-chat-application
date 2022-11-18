import React, { useContext, useState } from 'react'
import { Form, Modal, Input } from 'antd';
import { AppContext } from '../../Context/AppProvider';

export default function AddFriendModal() {
    // const [isAddFriendVisible, setIsAddFriendVisible] = useContext(AppContext);
    const [isAddFriendVisible, setIsAddFriendVisible] = useState(true);
    const [form] = Form.useForm();

    const handleOk = () => {


        setIsAddFriendVisible(false);
    }

    const handleCancel = () => {
        setIsAddFriendVisible(false);
    }

  return (
    <div>
        <Modal
            title="Add Friend"
            visible={isAddFriendVisible}
            onOk={handleOk}
            onCancel={handleCancel}    
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Friend code" name="code">
                    <Input placeholder='Add code' />
                </Form.Item>
                 
            </Form>

        </Modal>
    </div>
  )
}
