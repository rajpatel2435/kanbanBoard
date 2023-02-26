import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { Masonry } from "@mui/lab";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";
import { renderToString } from "react-dom/server";
import { blue, green, pink, yellow } from '@mui/material/colors';

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box,AppBar,Toolbar,Typography } from "@mui/material";


export default function Create() {
  resetServerContext();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [notes, setNotes] = useState([]);

  const [completed, setCompleted] = useState([]);
  const [inProg, setInProg] = useState([]);
  console.log("completed" + JSON.stringify(completed));
  console.log(notes);
  function handleOnDragEnd(res) {
    console.log("result drag end" + JSON.stringify(res));
    let result = res;

    const { source, destination } = result;
    console.log("src" + result.source);

    // const {source,destination}=res;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = notes,
      complete = completed,
      inProgress = inProg;
    console.log("Active" + active);
    //     }
    console.log("boool" + source.droppableId);

    if (source.droppableId === "toDoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "Completed") {
      add = complete[source.index];
      complete.splice(source.index, 1);
    } else {
      add = inProgress[source.index];
      inProgress.splice(source.index, 1);
    }

    if (destination.droppableId === "toDoList") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "Completed") {
      complete.splice(destination.index, 0, add);
    } else {
      inProgress.splice(destination.index, 0, add);
    }

    let h = setCompleted(complete);
    console.log("SETCOMPLETED" + h);
    setNotes(active);
    setInProg(inProgress);
  }
  resetServerContext();
  renderToString();

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
  };

  return (
    <>
        <DragDropContext onDragEnd={handleOnDragEnd}>
        
        <Grid container spacing={1} sx={{ whiteSpace: 'normal',overflow:"hidden"}}>
    
          <Grid item xs={6} md={4}>
            <Item>
            <AppBar sx={{ width: '310px',top:'60px',mr:"720px",height:'50px',textAlign:'center',bgcolor:'#121313' }} position='fixed'   elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1,mb:"8px",fontSize:"20px",fontFamily:'cursive' }}>
                    <b>New Tasks</b>
                    </Typography>
                
                   
                </Toolbar>
                
            </AppBar>
              <Container>
     
   
                <Box sx={{ width: 800, minHeight: 829,mt:"15px"}} ml={-2}>
                 
                  <Masonry columns={1} spacing={2}>
            
                    <Droppable droppableId="toDoList">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...provided.dragHandleProps}
                        >
                          {notes.map((note, index) => {
                            return (
                              <Draggable
                                key={note.id}
                                draggableId={renderToString(note.id)}
                                index={index}
                              >
                                {(provided) => (
                                  <Container
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    key={note.id}
                                    ref={provided.innerRef}
                                  >
                                    <Grid
                                      item
                                      key={note.id}
                                      md={4}
                                      lg={4}
                                      xs={4}
                                      margin={2}
                                    >
                                      <NoteCard
                                        note={note}
                                        handleDelete={handleDelete}
                                      />
                                    </Grid>
                                  </Container>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Masonry>
                </Box>
              </Container>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
            <AppBar sx={{ width: '310px',top:'60px',mr:"375px",height:'50px',backgroundColor:green[500],textAlign:'center' }} position='fixed'    elevation={1}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1,mb:"8px",fontSize:"20px",fontFamily:'cursive' }}>
                   <b> In Progress</b>
                    </Typography>
                
                   
                </Toolbar>
                
            </AppBar>
              <Container>
                <Box sx={{ width: 800, minHeight: 829,mt:"15px" }} ml={-2}>
                  <Masonry columns={1} spacing={2}>
                    <Droppable droppableId="inProg">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...provided.dragHandleProps}
                        >
                          {inProg.map((inProg, index) => {
                            return (
                              <Draggable
                                key={inProg.id}
                                draggableId={renderToString(inProg.id)}
                                index={index}
                              >
                                {(provided) => (
                                  <Container
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    key={inProg.id}
                                    ref={provided.innerRef}
                                  >
                                    <Grid
                                      item
                                      key={inProg.id}
                                      md={4}
                                      lg={4}
                                      xs={4}
                                      margin={2}
                                    >
                                      <NoteCard
                                        note={inProg}
                                        handleDelete={handleDelete}
                                      />
                                    </Grid>
                                  </Container>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Masonry>
                </Box>
              </Container>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
            <AppBar sx={{ width: '310px',top:'60px',mr:"35px",height:'50px',bgcolor:"#0A0A08",textAlign:'center' }} position='fixed'    elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1,mb:"8px",fontSize:"20px",fontFamily:'cursive' }}>
               <b> Completed Tasks</b>
                    </Typography>
                
                   
                </Toolbar>
                
            </AppBar>
              <Container>
                <Box sx={{ width: 800, minHeight: 829,mt:"15px" }} ml={-2}>
                  <Masonry columns={1} spacing={2}>
                    <Droppable droppableId="Completed">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...provided.dragHandleProps}
                        >
                          {completed.map((completed, index) => {
                            return (
                              <Draggable
                                key={completed.id}
                                draggableId={renderToString(completed.id)}
                                index={index}
                              >
                                {(provided) => (
                                  <Container
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    key={completed.id}
                                    ref={provided.innerRef}
                                  >
                                    <Grid
                                      item
                                      key={completed.id}
                                      md={4}
                                      lg={4}
                                      xs={4}
                                      margin={2}
                                    >
                                      <NoteCard
                                        note={completed}
                                        handleDelete={handleDelete}
                                      />
                                    </Grid>
                                  </Container>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Masonry>
                </Box>
              </Container>
            </Item>
          </Grid>

        </Grid>
   
        </DragDropContext>
    </>
  );
}
