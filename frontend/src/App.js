import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Button, CircularProgress, Box, Fade } from '@mui/material';

const App = () => {
    const [houses, setHouses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [length, setLength] = useState(1); // Assume 1 as the default value
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchHouses = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3001/api/houses?page=${currentPage}`);
                setHouses(response.data);
                // Set total pages based on API response, if available
                console.log(response.data,'herehere rherheoihrowejhroweijh')
                setLength(response.data.length); // Uncomment if the backend provides total pages
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
              setLoading(false);
            }
        };

        fetchHouses();
    }, [currentPage]);

    const handleNextPage = () => {
        if (length >= 10) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
      <Container>
          <Typography variant="h2" gutterBottom align='center'>A Song of Ice and Fire Characters</Typography>
          <Box display="flex" justifyContent="center" mt={4} mb={4}>
              <Button variant="contained" onClick={handlePrevPage} disabled={currentPage === 1} sx={{ marginRight: 10 }}>
                  &lt;&lt; Prev
              </Button>
              <Button variant="contained" onClick={handleNextPage} disabled={length < 10}>
                  Next &gt;&gt;
              </Button>
          </Box>
          {loading ? (
              <Box display="flex" justifyContent="center" mt={5}>
                  <CircularProgress />
              </Box>
          ) : (
              <Fade in={!loading}>
                  <Box>
                      {houses.map((house, index) => (
                          <Card key={index} variant="outlined" sx={{ marginBottom: 2, transition: 'all 0.5s ease' }}>
                              <CardContent>
                                  <Typography variant="h5">{house.name}</Typography>
                                  {typeof house.members === 'string' ? (
                                      <Typography>{house.members}</Typography>
                                  ) : (
                                      <List>
                                          {house.members.map((member, idx) => (
                                              <ListItem key={idx}>
                                                  <ListItemText
                                                      primary={member.name}
                                                      secondary={member.alive ? 'Alive' : `Dead (${member.deathInfo})`}
                                                  />
                                              </ListItem>
                                          ))}
                                      </List>
                                  )}
                              </CardContent>
                          </Card>
                      ))}
                  </Box>
              </Fade>
          )}
      </Container>
  );
};

export default App;