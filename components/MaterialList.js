import React from 'react';

import MaterialItem from './MaterialItem';

const MaterialList = props => {
    return (
        <div className="request-material-list">
            <h2>Request material list</h2>
            {props.items.length === 0 ? (
                <p>No requested materials</p>
            ) : (
                props.items.map(item => (
                    <MaterialItem
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        name={item.label}
                        status={item.status}
                        onCancelMaterialItem={props.onCancelMaterialItem}
                        onChangeStatus={props.onChangeStatus}
                    />
                ))
            )}
        </div>
    )
};

export default MaterialList;