const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const baseUrl = 'https://anapioficeandfire.com/api';

app.get('/api/houses', async (req, res) => {
    const { page = 1 } = req.query; // Get the page query parameter, default to 1
    try {
        const housesResponse = await axios.get(`${baseUrl}/houses?pageSize=10&page=${page}`);
        const houses = housesResponse.data;

        const houseDetails = await Promise.all(houses.map(async (house) => {
            if (house.swornMembers.length === 0) {
                return {
                    name: house.name,
                    members: "This house has no sworn members"
                };
            }

            const members = await Promise.all(house.swornMembers.map(async (url) => {
                const memberResponse = await axios.get(url);
                const member = memberResponse.data;

                return {
                    name: member.name,
                    alive: !member.died,
                    deathInfo: member.died ? member.died : null
                };
            }));

            return {
                name: house.name,
                members
            };
        }));

        res.json(houseDetails);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
