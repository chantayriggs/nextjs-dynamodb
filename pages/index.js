import useSWR from 'swr'
import { useEffect, useState } from "react"

import Delete from "../components/delete"
import Edit from "../components/edit"
import NewItem from "../components/newItem"

// fetcher tells swr how to communicate with our api
const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
    const { data, error } = useSWR(
        "/api/item?get=get_all", 
        fetcher
    )

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading</div>



    return (
        <div>
            <div>
                <h1>Get All Items</h1>
                {
                    data.map( item => (
                        <div>
                            <div>{item.id}</div>
                            <div>{item.content}</div>
                            <div>{item.createdAt}</div>
                            <Delete id={item.id} />
                            <Edit id={item.id} />
                        </div>
                    ))
                }

            </div>
            <div>
                <NewItem />

            </div>

        </div>

    )
}

