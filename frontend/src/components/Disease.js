import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import SiteLogo from "./assets/logo.jpg";
import { Card, Form, Input, Button, Row, Col, Select } from "antd";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useHistory, useLocation } from "react-router-dom";
import swal from 'sweetalert';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDlR0drAOx_DfkQzAIj1JJWi9Uf5_yX1YE",
    authDomain: "health-d9186.firebaseapp.com",
    projectId: "health-d9186",
    storageBucket: "health-d9186.appspot.com",
    messagingSenderId: "873978215297",
    appId: "1:873978215297:web:79a7fdef6996fe1d29c680",
    measurementId: "G-43FSP7T3R3"
};

firebase.initializeApp(firebaseConfig);

function Disease() {
    let history = useHistory();

    const { Option } = Select;

    const [itching, setItching] = useState('');
    const [skinRash, setSkinRash] = useState('');
    const [continuousSneezing, setContinuousSneezing] = useState('');
    const [shivering, setShivering] = useState('');
    const [jointPain, setJointPain] = useState('');
    const [stomachPain, setStomachPain] = useState('');
    const [vomiting, setVomiting] = useState('');
    const [fatigue, setFatigue] = useState('');
    const [weightLoss, setWeightLoss] = useState('');
    const [highFever, setHighFever] = useState('');
    const [breathlessness, setBreathlessness] = useState('');
    const [dehydration, setDehydration] = useState('');
    const [indigestion, setIndigestion] = useState('');
    const [headache, setHeadache] = useState('');
    const [darkUrine, setDarkUrine] = useState('');
    const [nausea, setNausea] = useState('');
    const [lossOfAppetite, setLossOfAppetite] = useState('');
    const [painBehindTheEyes, setPainBehindTheEyes] = useState('');
    const [backPain, setBackPain] = useState('');
    const [abdominalPain, setAbdominalPain] = useState('');
    const [diarrhoea, setDiarrhoea] = useState('');
    const [mildFever, setMildFever] = useState('');
    const [acuteLiverFailure, setAcuteLiverFailure] = useState('');
    const [swellingOfStomach, setSwellingOfStomach] = useState('');
    const [swelledLymphNodes, setSwelledLymphNodes] = useState('');
    const [chestPain, setChestPain] = useState('');
    const [fastHeartRate, setFastHeartRate] = useState('');
    const [painInAnalRegion, setPainInAnalRegion] = useState('');
    const [bloodyStool, setBloodyStool] = useState('');
    const [neckPain, setNeckPain] = useState('');
    const [dizziness, setDizziness] = useState('');
    const [puffyFaceAndEyes, setPuffyFaceAndEyes] = useState('');
    const [enlargedThyroid, setEnlargedThyroid] = useState('');
    const [dryingAndTinglingLips, setDryingAndTinglingLips] = useState('');
    const [kneePain, setKneePain] = useState('');
    const [hipJointPain, setHipJointPain] = useState('');
    const [muscleWeakness, setMuscleWeakness] = useState('');
    const [swellingJoints, setSwellingJoints] = useState('');
    const [lossOfSmell, setLossOfSmell] = useState('');
    const [bladderDiscomfort, setBladderDiscomfort] = useState('');
    const [foulSmellOfUrine, setFoulSmellOfUrine] = useState('');
    const [redSpotsOverBody, setRedSpotsOverBody] = useState('');
    const [abnormalMenstruation, setAbnormalMenstruation] = useState('');
    const [stomachBleeding, setStomachBleeding] = useState('');
    const [historyOfAlcoholConsumption, setHistoryOfAlcoholConsumption] = useState('');

    const setItchingForm = (value) => {
        setItching(value);
    };

    const setSkinRashForm = (value) => {
        setSkinRash(value);
    };

    const setContinuousSneezingForm = (value) => {
        setContinuousSneezing(value);
    };

    const setShiveringForm = (value) => {
        setShivering(value);
    };

    const setJointPainForm = (value) => {
        setJointPain(value);
    };

    const setStomachPainForm = (value) => {
        setStomachPain(value);
    };

    const setVomitingForm = (value) => {
        setVomiting(value);
    };

    const setFatigueForm = (value) => {
        setFatigue(value);
    };

    const setWeightLossForm = (value) => {
        setWeightLoss(value);
    };

    const setHighFeverForm = (value) => {
        setHighFever(value);
    };

    const setBreathlessnessForm = (value) => {
        setBreathlessness(value);
    };

    const setDehydrationForm = (value) => {
        setDehydration(value);
    };

    const setIndigestionForm = (value) => {
        setIndigestion(value);
    };

    const setHeadacheForm = (value) => {
        setHeadache(value);
    };

    const setDarkUrineForm = (value) => {
        setDarkUrine(value);
    };

    const setNauseaForm = (value) => {
        setNausea(value);
    };

    const setLossOfAppetiteForm = (value) => {
        setLossOfAppetite(value);
    };

    const setPainBehindTheEyesForm = (value) => {
        setPainBehindTheEyes(value);
    };

    const setBackPainForm = (value) => {
        setBackPain(value);
    };

    const setAbdominalPainForm = (value) => {
        setAbdominalPain(value);
    };

    const setDiarrhoeaForm = (value) => {
        setDiarrhoea(value);
    };

    const setMildFeverForm = (value) => {
        setMildFever(value);
    };

    const setAcuteLiverFailureForm = (value) => {
        setAcuteLiverFailure(value);
    };

    const setSwellingOfStomachForm = (value) => {
        setSwellingOfStomach(value);
    };

    const setSwelledLymphNodesForm = (value) => {
        setSwelledLymphNodes(value);
    };

    const setChestPainForm = (value) => {
        setChestPain(value);
    };

    const setFastHeartRateForm = (value) => {
        setFastHeartRate(value);
    };

    const setPainInAnalRegionForm = (value) => {
        setPainInAnalRegion(value);
    };

    const setBloodyStoolForm = (value) => {
        setBloodyStool(value);
    };

    const setNeckPainForm = (value) => {
        setNeckPain(value);
    };

    const setDizzinessForm = (value) => {
        setDizziness(value);
    };

    const setPuffyFaceAndEyesForm = (value) => {
        setPuffyFaceAndEyes(value);
    };

    const setEnlargedThyroidForm = (value) => {
        setEnlargedThyroid(value);
    };

    const setDryingAndTinglingLipsForm = (value) => {
        setDryingAndTinglingLips(value);
    };

    const setKneePainForm = (value) => {
        setKneePain(value);
    };

    const setHipJointPainForm = (value) => {
        setHipJointPain(value);
    };

    const setMuscleWeaknessForm = (value) => {
        setMuscleWeakness(value);
    };

    const setSwellingJointsForm = (value) => {
        setSwellingJoints(value);
    };

    const setLossOfSmellForm = (value) => {
        setLossOfSmell(value);
    };

    const setBladderDiscomfortForm = (value) => {
        setBladderDiscomfort(value);
    };

    const setFoulSmellOfUrineForm = (value) => {
        setFoulSmellOfUrine(value);
    };

    const setRedSpotsOverBodyForm = (value) => {
        setRedSpotsOverBody(value);
    };

    const setAbnormalMenstruationForm = (value) => {
        setAbnormalMenstruation(value);
    };

    const setStomachBleedingForm = (value) => {
        setStomachBleeding(value);
    };

    const setHistoryOfAlcoholConsumptionForm = (value) => {
        setHistoryOfAlcoholConsumption(value);
    };

    useEffect(() => onReload(), []);

    const onReload = () => {
        console.log("new")
    };

    const validation = () => {
        var Error = false;

        if ( !itching || !skinRash || !continuousSneezing || !shivering || !jointPain || !stomachPain || !vomiting || !fatigue || !weightLoss || !highFever || !breathlessness || !dehydration || !indigestion || !headache || !darkUrine || !nausea || !lossOfAppetite || !painBehindTheEyes || !backPain || !abdominalPain || !diarrhoea || !mildFever || !acuteLiverFailure || !swellingOfStomach || !swelledLymphNodes || !chestPain || !fastHeartRate || !painInAnalRegion || !bloodyStool || !neckPain || !dizziness || !puffyFaceAndEyes || !enlargedThyroid || !dryingAndTinglingLips || !kneePain || !hipJointPain || !muscleWeakness || !swellingJoints || !lossOfSmell || !bladderDiscomfort || !foulSmellOfUrine || !redSpotsOverBody || !abnormalMenstruation || !stomachBleeding || !historyOfAlcoholConsumption ) {
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

    const username = localStorage.getItem('username');
    
    const SubmitForm = async (e) => {
        if (validation()) {
            const url = "http://localhost:1111/disease";
            const data = {
                itching: itching,
                skin_rash: skinRash,
                continuous_sneezing: continuousSneezing,
                shivering: shivering,
                joint_pain: jointPain,
                stomach_pain: stomachPain,
                vomiting: vomiting,
                fatigue: fatigue,
                weight_loss: weightLoss,
                high_fever: highFever,
                breathlessness: breathlessness,
                dehydration: dehydration,
                indigestion: indigestion,
                headache: headache,
                dark_urine: darkUrine,
                nausea: nausea,
                loss_of_appetite: lossOfAppetite,
                pain_behind_the_eyes: painBehindTheEyes,
                back_pain: backPain,
                abdominal_pain: abdominalPain,
                diarrhoea: diarrhoea,
                mild_fever: mildFever,
                acute_liver_failure: acuteLiverFailure,
                swelling_of_stomach: swellingOfStomach,
                swelled_lymph_nodes: swelledLymphNodes,
                chest_pain: chestPain,
                fast_heart_rate: fastHeartRate,
                pain_in_anal_region: painInAnalRegion,
                bloody_stool: bloodyStool,
                neck_pain: neckPain,
                dizziness: dizziness,
                puffy_face_and_eyes: puffyFaceAndEyes,
                enlarged_thyroid: enlargedThyroid,
                drying_and_tingling_lips: dryingAndTinglingLips,
                knee_pain: kneePain,
                hip_joint_pain: hipJointPain,
                muscle_weakness: muscleWeakness,
                swelling_joints: swellingJoints,
                loss_of_smell: lossOfSmell,
                bladder_discomfort: bladderDiscomfort,
                foul_smell_of_urine: foulSmellOfUrine,
                red_spots_over_body: redSpotsOverBody,
                abnormal_menstruation: abnormalMenstruation,
                stomach_bleeding: stomachBleeding,
                history_of_alcohol_consumption: historyOfAlcoholConsumption
            };
    
            await axios.post(url, data, {
                headers: { "Content-Type": "application/json" },
            })
            .then(async (res) => {
                console.log(res.data);
                console.log(res.data.disease);
    
                // Save data to Firebase Realtime Database with current date
                const database = firebase.database();
                const diseasesRef = database.ref('diseases');
                const newDiseaseRef = diseasesRef.push();
                const currentDate = new Date().toISOString(); // Get current date in ISO format
                newDiseaseRef.set({
                    username: username,
                    symptoms: data,
                    predictedDisease: res.data.disease,
                    date: currentDate // Save current date along with the other data
                });
    
                // Show success alert with search button
                swal({
                    title: "Prediction Success!",
                    text: `Disease: ${res.data.disease}`,
                    icon: "success",
                    buttons: ["Cancel", "Search on Wikipedia"],
                })
                .then((search) => {
                    if (search) {
                        const searchQuery = encodeURIComponent(res.data.disease);
                        const searchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`;
                        window.open(searchUrl, "_blank");
                    }
                });
            });
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
                    <Row gutter={20}>
                        <Col md={8}>
                            <Form.Item
                                label="Itching"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={itching}
                                    onChange={setItchingForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Skin Rash"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={skinRash}
                                    onChange={setSkinRashForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Continuous Sneezing"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={continuousSneezing}
                                    onChange={setContinuousSneezingForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Shivering"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={shivering}
                                    onChange={setShiveringForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Joint Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={jointPain}
                                    onChange={setJointPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Stomach Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={stomachPain}
                                    onChange={setStomachPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Vomiting"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={vomiting}
                                    onChange={setVomitingForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Fatigue"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={fatigue}
                                    onChange={setFatigueForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Weight Loss"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={weightLoss}
                                    onChange={setWeightLossForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="High Fever"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={highFever}
                                    onChange={setHighFeverForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Breathlessness"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={breathlessness}
                                    onChange={setBreathlessnessForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Dehydration"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={dehydration}
                                    onChange={setDehydrationForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Indigestion"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={indigestion}
                                    onChange={setIndigestionForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Headache"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={headache}
                                    onChange={setHeadacheForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Dark Urine"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={darkUrine}
                                    onChange={setDarkUrineForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Nausea"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={nausea}
                                    onChange={setNauseaForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Loss of Appetite"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={lossOfAppetite}
                                    onChange={setLossOfAppetiteForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Pain Behind the Eyes"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={painBehindTheEyes}
                                    onChange={setPainBehindTheEyesForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Back Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={backPain}
                                    onChange={setBackPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Abdominal Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={abdominalPain}
                                    onChange={setAbdominalPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Diarrhoea"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={diarrhoea}
                                    onChange={setDiarrhoeaForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Mild Fever"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={mildFever}
                                    onChange={setMildFeverForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Acute Liver Failure"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={acuteLiverFailure}
                                    onChange={setAcuteLiverFailureForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Swelling of Stomach"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={swellingOfStomach}
                                    onChange={setSwellingOfStomachForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Swelled Lymph Nodes"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={swelledLymphNodes}
                                    onChange={setSwelledLymphNodesForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Chest Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={chestPain}
                                    onChange={setChestPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Fast Heart Rate"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={fastHeartRate}
                                    onChange={setFastHeartRateForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Pain in Anal Region"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={painInAnalRegion}
                                    onChange={setPainInAnalRegionForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Bloody Stool"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={bloodyStool}
                                    onChange={setBloodyStoolForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Neck Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={neckPain}
                                    onChange={setNeckPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Dizziness"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={dizziness}
                                    onChange={setDizzinessForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Puffy Face and Eyes"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={puffyFaceAndEyes}
                                    onChange={setPuffyFaceAndEyesForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Enlarged Thyroid"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={enlargedThyroid}
                                    onChange={setEnlargedThyroidForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Drying and Tingling Lips"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={dryingAndTinglingLips}
                                    onChange={setDryingAndTinglingLipsForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Knee Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={kneePain}
                                    onChange={setKneePainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Hip Joint Pain"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={hipJointPain}
                                    onChange={setHipJointPainForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Muscle Weakness"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={muscleWeakness}
                                    onChange={setMuscleWeaknessForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={8}>
                            <Form.Item
                                label="Swelling Joints"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={swellingJoints}
                                    onChange={setSwellingJointsForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Loss of Smell"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={lossOfSmell}
                                    onChange={setLossOfSmellForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Bladder Discomfort"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={bladderDiscomfort}
                                    onChange={setBladderDiscomfortForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Foul Smell of Urine"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={foulSmellOfUrine}
                                    onChange={setFoulSmellOfUrineForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Red Spots Over Body"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={redSpotsOverBody}
                                    onChange={setRedSpotsOverBodyForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Abnormal Menstruation"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={abnormalMenstruation}
                                    onChange={setAbnormalMenstruationForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="Stomach Bleeding"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={stomachBleeding}
                                    onChange={setStomachBleedingForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col md={8}>
                            <Form.Item
                                label="History of Alcohol Consumption"
                                wrapperCol={{ style: { width: "96%" } }}
                                labelAlign="left"
                                colon={false}
                            >
                                <Select
                                    placeholder="Select"
                                    value={historyOfAlcoholConsumption}
                                    onChange={setHistoryOfAlcoholConsumptionForm}
                                >
                                    <Option value="1">True</Option>
                                    <Option value="0">False</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                    </Row>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: 200 }} >
                            Check
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    );
}

export default Disease;