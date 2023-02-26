import React, { useState } from 'react'
import { Container, Typography, Button, TextField, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';


export default function Create() {

    const navi = useNavigate()

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleErr, setTitleErr] = useState(false);
    const [detailsErr, setDetailsErr] = useState(false);
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title) {
            setTitleErr(false)
        } else {
            setTitleErr(true)
        }

        if (details) {
            setDetailsErr(false)
        } else {
            setDetailsErr(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => navi('/'))
        } else {
            console.log('false')
        }
    }

    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom
            >
                Create a new task
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleErr}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    multiline
                    rows={5}
                    error={detailsErr}
                />

                <FormControl
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                >
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <FormControlLabel control={<Radio color='secondary' />} value='money' label='Money' />
                        <FormControlLabel control={<Radio color='secondary' />} value='todo' label='To Do' />
                        <FormControlLabel control={<Radio color='secondary' />} value='reminders' label='Reminders' />
                        <FormControlLabel control={<Radio color='secondary' />} value='work' label='Work' />
                    </RadioGroup>
                </FormControl>

                <Button
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<ArrowForwardIcon />}
                >
                    Submit
                </Button>
            </form>


        </Container>
   )
}
