import { Container, Grid, TextField, Card, CardMedia, Typography, CardContent} from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{my: '2rem'}} maxWidth="sm">
             <TextField 
                 fullWidth id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" />

                <Grid sx={{ mt: '1rem'}} container spacing={3}>
                    <Grid item xs={4}>
                        <Card> 
                            <CardMedia 
                            sx={{ height: 140 }}
                            image= "https://media.istockphoto.com/id/1130112004/photo/vegan-detox-buddha-bowl-with-turmeric-roasted-chickpeas-greens-avocado-persimmon-blood-orange.jpg?s=1024x1024&w=is&k=20&c=vxwp1UeZvlinBZGsIT2ow-4zqoul7x-B9m-dVLEpu5E="/>
                
                        </Card>
                        <CardContent>
                            <Typography variant="h5"> Recipe Name</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </Container>
    );
}