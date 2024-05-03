import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import SiteLogo from "./assets/bmi.avif";
import { Card, Form, Input, Button, Row, Col } from "antd";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useHistory, useLocation } from "react-router-dom";
import swal from 'sweetalert';

function Bmi() {
    let history = useHistory();

    const [height_cm, setHeight_cm] = useState('');
    const [weight_kg, setWeight_kg] = useState('');

    const setHeight_cmForm = (e) => {
        setHeight_cm(e.target.value)
    }

    const setWeight_kgForm = (e) => {
        setWeight_kg(e.target.value)
    }

    const calculateBMI = (height_cm_1, weight_kg_1) => {
        if (height_cm_1 != "" && weight_kg_1 != "") {
            const h = ((height_cm_1 * 1) / 100)
            console.log(h)
            const cal_bmi = (weight_kg_1 * 1) / (h * h)
            console.log(cal_bmi.toFixed(2))
            var des=""
            if(cal_bmi.toFixed(2)<18.5){
                des="You are Under weight"
            }else if(24.9>cal_bmi.toFixed(2)>=18.5){
                des="You are Healthy"
            }else if(24.9<=cal_bmi.toFixed(2)<29.9){
                des="You are Over weight"
            }else{
                des="Obese"
            }
            swal("Your BMI!", "BMI : " + cal_bmi.toFixed(2)+" | "+des, "success")
        }
    }

    useEffect(() => onReload(), []);

    const onReload = () => {
        console.log("new")
    };

    const validation = () => {
        var Error = false;

        if (!weight_kg || !height_cm) {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Validation Error!"
                    content="All fields are required!"
                    scheme={Cinnamon.Crisp.SCHEME_RED}
                    icon={<ErrorOutlineIcon />}
                />
            });
            Error = true;
        }

        if (Error) {
            return false;
        }

        return true;
    };

    const SubmitForm = async (e) => {
        if (validation()) {
            console.log(height_cm)
            calculateBMI(height_cm, weight_kg)
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Card bordered={false} style={{ textAlign: "center", backgroundColor: '#f5f5f5' }}>
                <img
                    src={SiteLogo}
                    alt="React Icon"
                    style={{ width: "550px", padding: 12 }}
                />
                <p style={{ padding: 15, fontWeight: "bold" }}>Fill Your Report Data</p>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={SubmitForm}
                >
                    <Row>
                        <Col md={24}>
                            <Form.Item
                                label="Height (cm)"
                                name="height_cm"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                                rules={[
                                    {
                                        required: false,
                                        message: "Enter Height (cm)",
                                    },
                                ]}
                            >
                                <Input
                                    type="text"
                                    placeholder="Please enter Height (cm)"
                                    value={height_cm}
                                    onChange={setHeight_cmForm} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Form.Item
                                label="Weight (kg)"
                                name="weight_kg"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                                rules={[
                                    {
                                        required: false,
                                        message: "Enter Weight (kg)",
                                    },
                                ]}
                            >
                                <Input
                                    type="text"
                                    placeholder="Please enter Weight (kg)"
                                    value={weight_kg}
                                    onChange={setWeight_kgForm} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: 200 }} >
                            Calculate
                        </Button>
                    </Form.Item>
                </Form>
                <Button
                    type="primary"
                    href="link "
                    style={{ width: 200 }} >
                    Under weight
                </Button>
                <Button
                    type="primary"
                    href="link "
                    style={{ width: 200 }} >
                    Healthy
                </Button>
                <Button
                    type="primary"
                    href="link "
                    style={{ width: 200 }} >
                    Over weight
                </Button>
                <Button
                    type="primary"
                    href="link "
                    style={{ width: 200 }} >
                    Obese
                </Button>
            </Card>

        </div>
    );
}

export default Bmi;