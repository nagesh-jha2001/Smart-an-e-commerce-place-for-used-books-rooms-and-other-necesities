import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { deleted,update } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const user = props.match.params.user_id
    const [Product, setProduct] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const handleDelete = async () => {
        dispatch(deleted(productId))
      }
    
      const handleUpdate = async () => {
        try {
          await Axios.put(`api/product/${productId}`, {
            username: user.username,
            title,
            description,
            price,
          });
          setUpdateMode(false)
        } catch (err) {}
      };
    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                        detail={Product} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage
