import React, {useEffect, useState} from 'react';
import Select from 'react-select';

import { RequestButton } from './RequestButton';

const mockMaterialList = [
    { value: 'cotton', label: 'Cotton' },
    { value: 'wool', label: 'Wool' },
    { value: 'nylon', label: 'Nylon' },
    { value: 'flax', label: 'Flax' },
    { value: 'polyester', label: 'Polyester' },
    { value: 'silk', label: 'Silk' },
    { value: 'denim', label: 'Denim' },
    { value: 'syntheticFiber', label: 'Synthetic fiber' }
];

const NewMaterialItem = props => {
    const [suggestedMaterialList, setSuggestedMaterialList] = useState(mockMaterialList);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [disabledRequestBtn, setDisabledRequestBtn] = useState(true);

    const saveMaterialItemDataHandler = () => {
        const materialItemData = {
            ...selectedMaterial,
            id: Math.random().toString(),
            status: 'queued'
        };

        setSuggestedMaterialList(suggestedMaterialList.filter(item => item.value !== selectedMaterial.value));
        setSelectedMaterial(null);
        setDisabledRequestBtn(true);

        props.onAddMaterialItem(materialItemData);
    };

    const onSelectMaterial = materialItem => {
        setDisabledRequestBtn(false);
        setSelectedMaterial(materialItem);
    };

    useEffect(() => {
       if (props.canceledMaterialValue) {
           setSuggestedMaterialList((prevMaterialItems) => {
               const canceledRequestedMaterialItem = mockMaterialList.find(item =>
                   props.canceledMaterialValue === item.value
               );

              return [canceledRequestedMaterialItem, ...prevMaterialItems]
           });
       }
    }, [props.canceledMaterialValue]);

    return (
        <div>
            <h2>Please select the raw material which you would like to request</h2>

            <Select value={selectedMaterial} onChange={onSelectMaterial} options={suggestedMaterialList} />

            <RequestButton onClick={saveMaterialItemDataHandler} disabled={disabledRequestBtn}>
                Request start
            </RequestButton>
        </div>
    )
};

export default NewMaterialItem;