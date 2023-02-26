import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Toolbar,Typography,AppBar } from '@mui/material';import { format } from 'date-fns';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function r() {
  return (
    <div>

<Grid container spacing={3} sx={{overflow:"hidden"}}>
  <Grid item xs={6} md={4}>
    <Item>

            <AppBar sx={{ width: '310px',top:'20px',mr:"200px" }} position='fixed'   color="secondary" elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Raj   {/* Login and Logout Button */}
                    </Typography>
                   
                </Toolbar>
                
            </AppBar>
        <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus adipisci delectus ut ipsam possimus recusandae quia officia sunt. Ab molestias inventore doloremque voluptates assumenda in nemo! Quas, et 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, harum expedita optio accusamus facilis molestias voluptatum unde! Veritatis dolor quaerat iure voluptas? Soluta atque molestiae cupiditate voluptas doloremque fuga.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nostrum? Atque corrupti ipsum cupiditate, molestiae numquam dolores magnam porro ex magni nostrum illo tempore blanditiis, natus culpa ratione quae expedita!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo labore cum, vel, nisi dolorem, praesentium provident deserunt nemo rem pariatur atque minus maiores incidunt a perspiciatis! Adipisci, impedit eos?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos voluptatibus illo est pariatur nemo ea eius debitis dolores earum, officia, cum non iure recusandae voluptates error. Autem, soluta assumenda.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quam fugit molestias? Placeat, perferendis? Eligendi quia ea accusamus provident dolore dolor distinctio unde minima, porro quas deserunt blanditiis quos dignissimos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at facilis iure accusantium aperiam tempora, beatae illo harum in mollitia totam suscipit excepturi veritatis doloribus sapiente nemo iusto dolores deleniti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis hic deleniti adipisci culpa fuga ratione, expedita, quae rerum quas, ea recusandae nam iusto rem tempore sit nesciunt. Iusto, assumenda!
        </p>
    </Item>
  </Grid>
  <Grid item xs={2} md={4}>
    <Item>
    <AppBar sx={{ width: '310px',top:'20px' }} position='sticky'   color="secondary" elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Raj   {/* Login and Logout Button */}
                    </Typography>
                   
                </Toolbar>
                
            </AppBar>
            <p>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus adipisci delectus ut ipsam possimus recusandae quia officia sunt. Ab molestias inventore doloremque voluptates assumenda in nemo! Quas, et 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, harum expedita optio accusamus facilis molestias voluptatum unde! Veritatis dolor quaerat iure voluptas? Soluta atque molestiae cupiditate voluptas doloremque fuga.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nostrum? Atque corrupti ipsum cupiditate, molestiae numquam dolores magnam porro ex magni nostrum illo tempore blanditiis, natus culpa ratione quae expedita!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo labore cum, vel, nisi dolorem, praesentium provident deserunt nemo rem pariatur atque minus maiores incidunt a perspiciatis! Adipisci, impedit eos?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos voluptatibus illo est pariatur nemo ea eius debitis dolores earum, officia, cum non iure recusandae voluptates error. Autem, soluta assumenda.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quam fugit molestias? Placeat, perferendis? Eligendi quia ea accusamus provident dolore dolor distinctio unde minima, porro quas deserunt blanditiis quos dignissimos?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at facilis iure accusantium aperiam tempora, beatae illo harum in mollitia totam suscipit excepturi veritatis doloribus sapiente nemo iusto dolores deleniti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis hic deleniti adipisci culpa fuga ratione, expedita, quae rerum quas, ea recusandae nam iusto rem tempore sit nesciunt. Iusto, assumenda!
</p>
    </Item>
  </Grid>
  <Grid item xs={4} md={4}>
    <Item>    <AppBar sx={{ width: '310px',top:'20px' }} position='sticky'   color="secondary" elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Raj   {/* Login and Logout Button */}
                    </Typography>
                   
                </Toolbar>
                
            </AppBar>
            <p>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus adipisci delectus ut ipsam possimus recusandae quia officia sunt. Ab molestias inventore doloremque voluptates assumenda in nemo! Quas, et 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, harum expedita optio accusamus facilis molestias voluptatum unde! Veritatis dolor quaerat iure voluptas? Soluta atque molestiae cupiditate voluptas doloremque fuga.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nostrum? Atque corrupti ipsum cupiditate, molestiae numquam dolores magnam porro ex magni nostrum illo tempore blanditiis, natus culpa ratione quae expedita!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo labore cum, vel, nisi dolorem, praesentium provident deserunt nemo rem pariatur atque minus maiores incidunt a perspiciatis! Adipisci, impedit eos?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos voluptatibus illo est pariatur nemo ea eius debitis dolores earum, officia, cum non iure recusandae voluptates error. Autem, soluta assumenda.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quam fugit molestias? Placeat, perferendis? Eligendi quia ea accusamus provident dolore dolor distinctio unde minima, porro quas deserunt blanditiis quos dignissimos?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at facilis iure accusantium aperiam tempora, beatae illo harum in mollitia totam suscipit excepturi veritatis doloribus sapiente nemo iusto dolores deleniti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis hic deleniti adipisci culpa fuga ratione, expedita, quae rerum quas, ea recusandae nam iusto rem tempore sit nesciunt. Iusto, assumenda!
</p></Item>
  </Grid>

</Grid>
    </div>
  )
}

export default r