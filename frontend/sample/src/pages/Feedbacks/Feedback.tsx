import { TextInput, Checkbox, Button, Group, Box, Radio, Switch } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from "react";
import { WholeWrapper } from './Feedback.style';
import './Feedback.css';
function Feedback() {
    const [checked, setChecked] = useState(false);
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <Box maw={300} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput role='emailInput'
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
                <Radio.Group
                    name="favoriteFramework"
                    label="Select your favorite framework/library"
                    withAsterisk
                >
                    <Group mt="xs">
                        <Radio value="react" label="React" />
                        <Radio value="ng" label="Angular" />
                        <Radio value="vue" label="Vue" />
                    </Group>
                </Radio.Group>
                <Switch data-testid="switch" style={{ marginTop: '10px' }} label="Enable notification" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />

                <Checkbox
                    data-testid="checkbox"
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />


                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
            <div className="welcome" data-testid='color'>
            Welcome
            </div>
            {/* <WholeWrapper data-testid='color' className='welcome'>
                Welcome
            </WholeWrapper> */}
        </Box>
    )
}
export default Feedback;