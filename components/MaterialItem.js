import React, { useState, useEffect } from 'react';

import { formatTime } from '../utils/helperFn';
import { CancelButton } from './CancelButton';
import { cancelRequest, newRequest } from '../utils/api';

const MaterialItem = props => {
    const [timer, setTimer] = useState('00:10');
    const [disabledCancelBtn, setCancelButtonDisabled] = useState(false);

    let countdownInterval;

    const cancelMaterialItemHandler = async () => {
        props.onCancelMaterialItem(props.value);

        // cancel the requested material item
        await cancelRequest(props.id);
    };

    const sendUpdateMaterialItem = async () => {
        setTimer('Time is out!');
        setCancelButtonDisabled(true);

        // post the requested material item
        await newRequest(props.id);
    };

    useEffect(() => {
        // 10 sec interval in order to cancel requested material item
        if (props.status === 'queued') {
            let count = 9;

            countdownInterval = setInterval(function() {
                const minutes = Math.floor(count / 60);
                const seconds = count % 60;
                const formattedCount = formatTime(minutes, seconds);

                setTimer(formattedCount);
                count--;
                if (count < 0) {
                    clearInterval(countdownInterval);

                    sendUpdateMaterialItem();
                }
            }, 1000);
        }
    }, [props.status]);

    useEffect(() => {
        return () => {
            // clear the request time limit in case the item was canceled;
            clearInterval(countdownInterval)
        };
    }, []);

    return (
        <div className="material-item">
            <div className="material-item-title">Material {props.name}</div>
            <div className="material-item-status">Status: Request {props.status}</div>
            <div className="matirial-item-timer">{timer}</div>
            <CancelButton onClick={cancelMaterialItemHandler} disabled={disabledCancelBtn}>
                Cancel request
            </CancelButton>
        </div>
    )
};

export default MaterialItem;