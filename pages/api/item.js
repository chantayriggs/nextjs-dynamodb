import * as uuid from "uuid"
import dynamoDB from "../../lib/dynamo"

export default async function hander(req, res) {


        // Creates an Item
    if ( req.method === "PUT" ) {
        const item = {
            id: uuid.v4(),
            content: req.body.content,
            createdAt: Date.now()
        }
        // dynamoDB.put(item) returns a promise, so we will await it.
        await dynamoDB.put({
            Item: item
        })
        res.status(201).json(item)
    }




    if ( req.method === "GET" ) {
        if (req.query.get === "get_all"){
            
            const { Items } = await dynamoDB.scan({
                TableName: process.env.TABLE_NAME,
                AttributesToGet: [
                  'id',
                  'content',
                  'createdAt'
                ],
            })

            res.status(200).json(Items)


            // Gets an Item by ID
            //  /api/item?id=

        } else {
            const { Item } = await dynamoDB.get({
                Key: {
                    // pull id key from query object
                    id:req.query.id
                }
            })
            res.status(200).json(Item)
        }

    }



    // Updates an Item
    if ( req.method === "POST") {
        const { Attributes } = await dynamoDB.update({
            Key: {
                id: req.body.id
            },
            UpdateExpression: "SET content = :content",
            ExpressionAttributeValues: {
                ":content": req.body.content || null
            },
            ReturnValues: "ALL_NEW"
        })
        res.status(200).json(Attributes)
    }


    //  Deletes an Item
    //  /api/item\?id\=
    if ( req.method === "DELETE" ) {
        await dynamoDB.delete({
            Key: {
                id: req.query.id
            }
        })
        res.status(204).json({"Message": "Successfully Deleted Item"})
    }

}

