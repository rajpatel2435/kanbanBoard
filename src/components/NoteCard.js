import React from 'react'
import { Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';
import { Draggable } from 'react-beautiful-dnd';

export default function NoteCard({ note, handleDelete }) {
    return (

        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{
                        backgroundColor: blue[500],
                        ...(note.category === 'work' && {
                            backgroundColor: yellow[700],
                        }),
                        ...(note.category === 'money' && {
                            backgroundColor: green[500],
                        }),
                        ...(note.category === 'todos' && {
                            backgroundColor: pink[500],
                        })
                    }} > {note.category[0].toUpperCase()}</Avatar>
                }
                action={
                    < IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton >
                }
                title={note.title}
                subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
            />
            <CardContent>
                <Typography variant='body2'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card >
  
    )
}
