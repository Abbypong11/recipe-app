import {
  Container,Grid,TextField,Card,CardMedia,Typography, CardActionArea, CardContent,} from "@mui/material";
  import {useEffect, useState} from "react";
  import emptyIcon from "../../assets/images/undraw_empty_re_opql.svg";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [keyword, setKeyword] = useState("");


    const getRecipes = () => {
        // preparenURL
        const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', keyword);
        //url.searchParams.append('number', 2); for the number of cards
        // fetch recipes from API
        fetch(url)
            .then(response => response.json()) 
            .then(data => {
             // update recipes state
             setRecipes(data.results);
           // console.log(data);
           
            })
            .catch(error => {
            console.log(error);
            })
       
    }
    useEffect(getRecipes,[keyword]);

  return (
    <Container sx={{ my: "2rem" }}>
        <TextField
            fullWidth
            id="outlined-basic"
            label="Enter a keyword to search recipes and hit Enter"
            variant="outlined"
            onKeyDown={event => event.key ==='Enter' && setKeyword(event.target.value)}
      />

      <Grid sx={{ mt: "1rem", justifyContent: "center"}} container spacing={3}>
        { recipes.length > 0 ? recipes.map(recipe => (<Grid key={recipe.id} item xs={4} >
          <Card sx={{ maxWidth: 345 , height:'100%'}}>
            <CardActionArea sx={{height: '100%'}}>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.titled}
              />
              <CardContent sx={{height:'100%'}}>
                <Typography gutterBottom 
                  variant="h5" component="div">
                  {recipe.title}
                </Typography>
               
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>)) : <img src={emptyIcon} width='50%'/>}
      </Grid>
    </Container>
  );
}
