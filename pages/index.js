import React, { useState } from 'react';

import Head from 'next/head';

import NewMaterialItem from '../components/NewMaterialItem';
import MaterialList from '../components/MaterialList';

import styles from '../styles/request-page.module.css';

export default function ProductionRequestLine() {
    const [requestedMaterialList, setRequestedMaterialList] = useState([]);
    const [canceledMaterialValue, setCanceledMaterialValue] = useState(null);

    const addMaterialItemHandler = materialItem => {
        setRequestedMaterialList((prevMaterialItems) =>
            [materialItem, ...prevMaterialItems]
        );
    };

    const cancelMaterialItemHandler = value => {
        const updatedMaterialList = requestedMaterialList.filter((item) => item.value !== value);

        setCanceledMaterialValue(value);
        setRequestedMaterialList(updatedMaterialList)
    };

    const changeStatusHandler = (status, value) => {
        setRequestedMaterialList((prevItems) =>
            prevItems.map((item) =>
                item.value === value ? { ...item, status } : item
            )
        );
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.form}>
                <NewMaterialItem
                    canceledMaterialValue={canceledMaterialValue}
                    onAddMaterialItem={addMaterialItemHandler}
                />
            </div>
            <div className={styles.list}>
                <MaterialList
                    items={requestedMaterialList}
                    onCancelMaterialItem={cancelMaterialItemHandler}
                    onChangeStatus={changeStatusHandler}
                />
            </div>
        </div>
    )
}
