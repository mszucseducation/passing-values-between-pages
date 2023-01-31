export default function ChildTwo({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."

    return(
        <>
            <button primary onClick={() => childToParent(data)}>Click Child To Parent</button>
        </>
    )
}