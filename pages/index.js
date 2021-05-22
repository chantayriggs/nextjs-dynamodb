import useSWR from "swr"

// fetcher tells swr how to communicate with our api
const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
    const { data, error } = useSWR(
        "/api/item?id=a28d0dc3-6030-468e-9e70-370e3fe766e5", 
        fetcher
    )

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading</div>

    return <div>{JSON.stringify(data)}</div>
}

