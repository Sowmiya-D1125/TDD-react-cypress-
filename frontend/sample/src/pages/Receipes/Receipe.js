import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group, TextInput, Table } from '@mantine/core';
function Receipe() {
    const [receipeName, setReceipeName] = useState("");
    const [receipeQuantity, setReceipeQnty] = useState("");
    const [origin, setOrigin] = useState("");
    const loggeduser = JSON.parse(localStorage.getItem("loggedInuser"));
    const [isEdit, setIsEdit] = useState(false)
    const [edit, setEdit] = useState([]);
    const [receipe, setReceipe] = useState([
        { id: '1', name: "Cutlet", quantity: '20', origin: 'US', createdBy: 'sowmiya@yopmail.com' },
        { id: '2', name: "Samosa", quantity: '10', origin: 'India', createdBy: 'mickey@yopmail.com' },
        { id: '3', name: "Noodles", quantity: '2', origin: 'Indonesia', createdBy: 'sowmiya@yopmail.com' },
        { id: '4', name: "Crocodile fry", quantity: '25', origin: 'China', createdBy: 'mickey@yopmail.com' },
        { id: '5', name: "Snake fry", quantity: '67', origin: 'China', createdBy: 'mickey@yopmail.com' },
        { id: '6', name: "White Rice", quantity: '20', origin: 'India', createdBy: 'mickey@yopmail.com' },
    ])

    const handleEdit = (id) => {
        setIsEdit(true)
        const filter = receipe.filter((val) => val.id === id);
        setEdit(filter)
        console.log(filter)
        setReceipeName(filter[0].name);
        setReceipeQnty(filter[0].quantity);
        setOrigin(filter[0].origin);
    }

    const handleDelete = (id) => {
        const filter = receipe.filter((val) => val.id !== edit[0].id);
        setReceipe(filter)
    }
    const rows = receipe.map((val) => (
        <tr key={val.id}>
            <td>{val.name}</td>
            <td>{val.quantity}</td>
            <td>{val.origin}</td>
            {val.createdBy === loggeduser.user ?
                <td>
                    <Button color="red" style={{ margin: 2 }} onClick={() => handleDelete(val.id)}>Delete</Button>
                    <Button onClick={() => handleEdit(val.id)}>Edit</Button>
                </td> :
                <td></td>}

        </tr>
    ));

    const handleForm = () => {
        if (isEdit) {
            const change = { ...receipe, }
            console.log(edit)
            const filter = receipe.filter((val) => val.id !== edit[0].id);
            const value = {
                id: edit[0].id,
                name: receipeName,
                quantity: receipeQuantity,
                origin: origin,
                createdBy: edit[0].createdBy
            }
            console.log(filter);
            console.log(value);
            const changed = filter
            changed.push(value);
            setReceipe(changed)
            setIsEdit(false)

        }
        else {
            const newOne = {
                id: (receipe.length + 1).toString(),
                name: receipeName,
                quantity: receipeQuantity,
                origin: origin,
                createdBy: loggeduser.user
            }
            const changed = receipe
            changed.push(newOne);
            setReceipe(changed);
            console.log(changed)
        }


    }
    return (
        <div>
            <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                <Card p="xl" shadow="sm" padding="lg" radius="md" withBorder style={{ margin: '10px' }}>
                    <Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                            <TextInput label="Receipe Name" value={receipeName} onChange={(e) => setReceipeName(e.target.value)}
                            />
                            <TextInput label="Receipe Quantity" value={receipeQuantity} onChange={(e) => setReceipeQnty(e.target.value)} />
                            <TextInput label="Receipe Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
                            <Button onClick={handleForm}>Submit</Button>
                        </Group>

                    </Card.Section>
                </Card>


            </div>
            <Group position="center">
                <Table highlightOnHover >
                    <thead>
                        <tr>
                            <th>Receipe Name</th>
                            <th>Receipe Quantity</th>
                            <th>Origin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="user-list">{receipe.map((val) => (
                        <tr key={val.id}>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.origin}</td>
                            {val.createdBy === loggeduser.user ?
                                <td>
                                    <Button color="red" style={{ margin: 2 }} onClick={() => handleDelete(val.id)}>Delete</Button>
                                    <Button onClick={() => handleEdit(val.id)}>Edit</Button>
                                </td> :
                                <td></td>}

                        </tr>
                    ))}</tbody>
                </Table>
            </Group>
        </div>
    )
}
export default Receipe;