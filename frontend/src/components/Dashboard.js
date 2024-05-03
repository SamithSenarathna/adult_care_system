import React, { useState , useEffect } from "react"
import "../App.css"
import SiteLogo from "./assets/logo.jpg";
import { Card , Button } from "antd"
import { useHistory } from "react-router-dom"

function Dashboard() {

    let history = useHistory();
    useEffect(() => onReload(), []);

    const onReload = () => {
      console.log("new")
      console.log(localStorage.getItem("loginAccess"))
      if (localStorage.getItem("loginAccess")!=null) {
        
      }else{
        history.push("/dash");
      }
    };

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
        }}
        >
        <Card bordered={false} style={{ textAlign: "center", backgroundColor: '#f5f5f5' }}>
            <img
            src={SiteLogo}
            alt="React Icon"
            style={{ width: "450px", padding: 30 }}
            />
            <p style={{ padding: 15, fontWeight: "bold" }}>Dashboard</p>
            
            <Button
                type="primary"
                htmlType="submit"
                style={{ width: 200 }}
                onClick={()=>{history.push("/disease")}}
                >
                Disease
            </Button>
            <br/><br/>
            <Button
                type="primary"
                htmlType="submit"
                style={{ width: 200 }}
                onClick={()=>{history.push("/bmi")}}
                >
                BMI
            </Button>
            <br/><br/>
            <Button
                type="primary"
                htmlType="submit"
                style={{ width: 200 }}
                onClick={()=>{history.push("/view-history")}}
                >
                View History
            </Button>
            <br/><br/>
        </Card>
        </div>
    );
}

export default Dashboard;