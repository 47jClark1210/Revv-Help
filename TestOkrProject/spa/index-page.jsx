import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


export default function IndexPage() {

    return (
        <div className="index-page">
            <Stack spacing={2} sx={{ maxWidth: "600px" }}>    
                <h1>Welcome to the Index Page</h1>

                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />                

                <Button variant="contained">Press Me</Button>
            </Stack>
        </div>
    );
}