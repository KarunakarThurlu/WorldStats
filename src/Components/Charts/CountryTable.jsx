import React from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography,
} from "@mui/material";

// Top 20 countries data
const countries = [
    { id: 1, name: "China", population: "1,425,000,000", capital: "Beijing", flag: "https://flagcdn.com/w40/cn.png", area: "9,596,961 km²" },
    { id: 2, name: "India", population: "1,417,000,000", capital: "New Delhi", flag: "https://flagcdn.com/w40/in.png", area: "3,287,263 km²" },
    { id: 3, name: "United States", population: "339,000,000", capital: "Washington, D.C.", flag: "https://flagcdn.com/w40/us.png", area: "9,525,067 km²" },
    { id: 4, name: "Indonesia", population: "277,000,000", capital: "Jakarta", flag: "https://flagcdn.com/w40/id.png", area: "1,904,569 km²" },
    { id: 5, name: "Pakistan", population: "240,000,000", capital: "Islamabad", flag: "https://flagcdn.com/w40/pk.png", area: "881,913 km²" },
    { id: 6, name: "Nigeria", population: "223,000,000", capital: "Abuja", flag: "https://flagcdn.com/w40/ng.png", area: "923,768 km²" },
    { id: 7, name: "Brazil", population: "216,000,000", capital: "Brasília", flag: "https://flagcdn.com/w40/br.png", area: "8,515,767 km²" },
    { id: 8, name: "Bangladesh", population: "173,000,000", capital: "Dhaka", flag: "https://flagcdn.com/w40/bd.png", area: "148,460 km²" },
    { id: 9, name: "Russia", population: "144,000,000", capital: "Moscow", flag: "https://flagcdn.com/w40/ru.png", area: "17,098,242 km²" },
    { id: 10, name: "Mexico", population: "128,000,000", capital: "Mexico City", flag: "https://flagcdn.com/w40/mx.png", area: "1,964,375 km²" },
    { id: 11, name: "Japan", population: "123,000,000", capital: "Tokyo", flag: "https://flagcdn.com/w40/jp.png", area: "377,975 km²" },
    { id: 12, name: "Ethiopia", population: "126,000,000", capital: "Addis Ababa", flag: "https://flagcdn.com/w40/et.png", area: "1,104,300 km²" },
    { id: 13, name: "Philippines", population: "113,000,000", capital: "Manila", flag: "https://flagcdn.com/w40/ph.png", area: "300,000 km²" },
    { id: 14, name: "Egypt", population: "112,000,000", capital: "Cairo", flag: "https://flagcdn.com/w40/eg.png", area: "1,010,408 km²" },
    { id: 15, name: "DR Congo", population: "102,000,000", capital: "Kinshasa", flag: "https://flagcdn.com/w40/cd.png", area: "2,344,858 km²" },
    { id: 16, name: "Vietnam", population: "98,000,000", capital: "Hanoi", flag: "https://flagcdn.com/w40/vn.png", area: "331,212 km²" },
    { id: 17, name: "Iran", population: "89,000,000", capital: "Tehran", flag: "https://flagcdn.com/w40/ir.png", area: "1,648,195 km²" },
    { id: 18, name: "Turkey", population: "85,000,000", capital: "Ankara", flag: "https://flagcdn.com/w40/tr.png", area: "783,562 km²" },
    { id: 19, name: "Germany", population: "84,000,000", capital: "Berlin", flag: "https://flagcdn.com/w40/de.png", area: "357,022 km²" },
    { id: 20, name: "Thailand", population: "71,000,000", capital: "Bangkok", flag: "https://flagcdn.com/w40/th.png", area: "513,120 km²" },
];

const CountryTable = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom align="center">
                🌍 Country Population Table
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ maxHeight: 850 }} // Fixed table height
            >
                <Table stickyHeader>
                    <TableHead  >
                        <TableRow >
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}} >ID</TableCell>
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}}>Flag</TableCell>
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}}>Name</TableCell>
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}}>Capital</TableCell>
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}}>Population</TableCell>
                            <TableCell sx={{ backgroundColor: "#2816efff" ,color:'white'}}>Area</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell>{c.id}</TableCell>
                                <TableCell>
                                    <Avatar src={c.flag} alt={c.name} />
                                </TableCell>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>{c.capital}</TableCell>
                                <TableCell>{c.population}</TableCell>
                                <TableCell>{c.area}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CountryTable;
