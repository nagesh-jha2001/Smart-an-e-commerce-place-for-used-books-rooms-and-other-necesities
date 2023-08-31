import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }
    const handleDelete = () => {
        props.deleted(props.detail._id)
    }
    const handleUpdate = () => {
        props.update(props.detail._id)
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                {/* <Button size="large" shape="round" type="danger"
                    onClick={handleUpdate}
                >
                    Update Post
                    </Button> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={handleDelete}
                >
                    Delete Post
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
