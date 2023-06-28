import React, { useEffect, useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, Flex } from '@mantine/core';
import { configAxios } from "../../utils/AxiosConfig";
import { notifications } from '@mantine/notifications';
import { Table } from '@mantine/core';
const User = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [fname, setfName] = useState<string>("");
    const [lname, setlName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [aadhar, setAdhar] = useState<string>("");
    const [pan, setPan] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [contact, setContact] = useState<string>("");

    const [fnameErr, setFNameErr] = useState<string>("");
    const [lnameErr, setLNameErr] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string>("");
    const [pswdErr, setPswdErr] = useState<string>("");
    const [adharErr, setAdharErr] = useState<string>("");
    const [panErr, setPanErr] = useState<string>("");
    const [addrErr, setAddrErr] = useState<string>("");
    const [contErr, setContErr] = useState<string>("");

    const [users, setUsers] = useState<any[]>([]);
const [isthere,setIsThere] = useState("");
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        configAxios.get("CustomerDetails/getData")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setUsers(res.data)
                }
            },
                (err) => {
                    console.log(err)
                });
    }
    const handleSubmit = () => {
        if (fname && lname && email && password && aadhar && pan && address && contact) {
            var params = {
                "firstName": fname,
                "lastName": lname,
                "email": email,
                "password": password,
                "adharNo": aadhar,
                "panNo": pan,
                "address": address,
                "contactNo": contact,
            }
            configAxios.post("CustomerDetails/signup", params)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        if (res.data.success) {
                            setIsThere("hello there")
                            close();
                            notifications.show({
                                title: 'Success',
                                message: 'User Added Succesfully',
                                color: 'teal',
                                autoClose: 3000,
                            })
                            fetchUser();
                        }
                    }
                },
                    (err) => {
                        console.log(err)
                    });
        }
        else {
            if (fname === "") {
                setFNameErr("First name must have at least 2 letters");
            }
            if (lname === "") {
                setLNameErr("Last name must have at least 1 letters");
            }
            if (email === "") {
                setEmailErr("Email must not be empty");
            }
            if (password === "") {
                setPswdErr("Password must not be empty");
            }
            if (aadhar === "") {
                setAdharErr("Aadhar must not be empty");
            }
            if (pan === "") {
                setPanErr("Pan Number is required");
            }
            if (address === "") {
                setAddrErr("Address is Required");
            }
            if (contact === "") {
                setContErr("Contact number is required");
            }
        }

    }
    const rows = users.map((user) => (
        <tr key={user._id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.contactNo}</td>
            <td>{user.address}</td>

        </tr>
    ));
    return (
        <div>
            <Group position="right">
                <Button onClick={open} data-testid="create-user-btn">Create User</Button>
            </Group>
            <Group position="center">
                <Table highlightOnHover >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody className="user-list">{rows}</tbody>
                </Table>
            </Group>
            <p>{isthere}</p>

            <Modal data-testid='create-user-modal' role="modal" opened={opened} size="55%" onClose={close} title="Add User">
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >

                    <TextInput className="firstname" id="FirstName" label="First Name" value={fname}
                        error={fnameErr}
                        data-testid="firstname"
                        onChange={(e) => {
                            setfName(e.target.value)
                            setFNameErr("")
                        }} />
                    <TextInput label="Last Name" value={lname}
                        error={lnameErr}
                        data-testid="lastname"
                        onChange={(e) => {
                            setLNameErr("")
                            setlName(e.target.value)
                        }} />
                    <TextInput label="Email Address" value={email}
                        error={emailErr}
                        data-testid="email"
                        onChange={(e) => {
                            setEmailErr("")
                            setEmail(e.target.value)
                        }} />
                    <TextInput label="Password" value={password}
                        error={pswdErr}
                        data-testid="password"
                        onChange={(e) => {
                            setPswdErr("")
                            setPassword(e.target.value)
                        }} />
                    <TextInput label="Aadhaar" value={aadhar}
                        error={adharErr}
                        data-testid="aadhar"
                        onChange={(e) => {
                            setAdharErr("")
                            setAdhar(e.target.value)
                        }} />
                    <TextInput label="PAN No" value={pan}
                        error={panErr}
                        data-testid="pan"
                        onChange={(e) => {
                            setPanErr("")
                            setPan(e.target.value)
                        }} />
                    <TextInput label="Address" value={address}
                        error={addrErr}
                        data-testid="address"
                        onChange={(e) => {
                            setAddrErr("")
                            setAddress(e.target.value)
                        }} />
                    <TextInput label="Contact No" value={contact}
                        error={contErr}
                        data-testid="contact"
                        onChange={(e) => {
                            setContErr("")
                            setContact(e.target.value)
                        }} />


                </Flex>
                <Group position="right">
                    <Button style={{ margin: 10 }} color="teal" onClick={handleSubmit} data-testid="call-api-btn">
                        Create
                    </Button>
                </Group>

            </Modal>
        </div>
    )
}
export default User;