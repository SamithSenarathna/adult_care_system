import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { getDatabase, ref, get, remove } from "firebase/database";

function ViewHistory() {
  const [diseases, setDiseases] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (username) {
      const db = getDatabase();
      const diseasesRef = ref(db, 'diseases');
      get(diseasesRef).then((snapshot) => {
        if (snapshot.exists()) {
          const diseasesData = snapshot.val();
          const userDiseases = Object.entries(diseasesData).filter(([key, disease]) => disease.username === username)
                                                           .map(([key, disease]) => ({ ...disease, key }));
          setDiseases(userDiseases);
        } else {
          console.log("No diseases found for user:", username);
        }
      }).catch((error) => {
        console.error("Error fetching diseases:", error.message);
      });
    }
  }, [username]);

  const handleViewInfo = (disease) => {
    const searchQuery = encodeURIComponent(disease);
    const searchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`;
    window.open(searchUrl, "_blank");
  };

  const handleDelete = (record) => {
    console.log("Deleting disease with key:", record.key); // Log the key
  
    const db = getDatabase();
    const diseaseRef = ref(db, `diseases/${record.key}`);
    remove(diseaseRef)
      .then(() => {
        console.log("Disease info deleted successfully.");
        // Update diseases state by removing the deleted record
        setDiseases(diseases.filter(item => item.key !== record.key));
      })
      .catch((error) => {
        console.error("Error deleting disease info:", error.message);
      });
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => new Date(date).toLocaleDateString(), 
    },
    {
      title: 'Symptoms',
      dataIndex: 'symptoms',
      key: 'symptoms',
      render: (symptoms, record) => {
        const symptomEntries = Object.entries(symptoms);
        const columnCount = 4;
        const columnSize = Math.ceil(symptomEntries.length / columnCount);
        const columns = [];
    
        for (let i = 0; i < columnCount; i++) {
          const columnSymptoms = symptomEntries.slice(i * columnSize, (i + 1) * columnSize);
          const columnElements = columnSymptoms.map(([symptom, value], index) => (
            <div key={`${record.key}-${index}`} style={{ color: value == 1 ? 'red' : 'blue', marginBottom: '5px' }}>
              {symptom}
            </div>
          ));
          columns.push(
            <div key={i} style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
              {columnElements}
            </div>
          );
        }
    
        return <div style={{ display: 'flex' }}>{columns}</div>;
      },
    },
    {
      title: 'Predicted Disease',
      dataIndex: 'predictedDisease',
      key: 'predictedDisease',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleViewInfo(record.predictedDisease)}>View Info</Button>
          <Popconfirm
            title="Are you sure delete this disease?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div>
      <h1>View History</h1>
      <h2>User: {username}</h2>
      <Table dataSource={diseases} columns={columns} />
    </div>
  );
}

export default ViewHistory;
