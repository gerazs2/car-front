import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
//initialize the query provider f
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//initialize the query provider f
const queryClient = new QueryClient();
//Importing carlist to render
import CarList from './components/Carlist';

function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
        <QueryClientProvider client={queryClient}>
          <CarList/>
        </QueryClientProvider>
    </Container>
  );
}

export default App;