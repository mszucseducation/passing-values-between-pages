import ChildTwo from './ChildTwo.js';
import { useState } from 'react';

export default function ParentTwo() {
    const [data, setData] = useState('');

    const childToParent = (childdata) => {
        setData(childdata);
    }
    return(
        <>
        {data}
        <ChildTwo childToParent={childToParent}/>
        </>
    )
}