import { useState } from "react"
import ChildOne from "./ChildOne";

export default function ParentOne() {
    const [data, setData] = useState("");

    const parentToChild = () => {
        setData('This is the data from the parent component which I will pass to the child component')
    }

    return(
        <>
        <ChildOne parentToChild={data}/>

        <button onClick={() => parentToChild()}>Click parent to child</button>
        </>
    )
}