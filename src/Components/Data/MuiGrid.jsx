import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useThemeMode } from "../Utils/ThemeModeProvider";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const MuiGrid = () => {
    const { mode, toggleTheme } = useThemeMode();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, mb: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <Item sx={{ backgroundColor: 'burlywood' }}>12</Item>
                    </Grid>
                </Grid>
            </Box>
            <Button onClick={toggleTheme}>ToggleTheme</Button>
            <Button onClick={handleOpen} variant="outlined">Click</Button>
            <Dialog open={open} onClose={handleClose} scroll='paper'>
                <DialogTitle>Foo</DialogTitle>
                <DialogContent dividers={'paper'}>
                    <Box >
                        <Grid container
                            spacing={2}
                            alignItems="center"
                            justifyContent="center">
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="FName"
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="FName"
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="FName"

                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="FName"

                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="FName"

                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="LastName"

                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined">Cancel</Button>
                    <Button onClick={handleClose} variant="outlined">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiGrid;