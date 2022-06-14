import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Grid} from '@mui/material';
import PartCard from '../PartCard';

export default function TopParts({ parts, category, categoryName }) {
    
    return (
        <>
        <Typography sx={{padding: '0.2em'}} variant='h2' align='center'>{categoryName}</Typography>
        <Divider />
        {parts.length ? <Grid container spacing={2} sx={{ paddingTop: "2em" }}>
        {parts.filter(x => x.categoryId === category).slice(0, 3).map((part, i) => {
        return <Grid item xs={6} md={4} key={i}>
                <PartCard {...part} />
              </Grid>
        })}
    </Grid> : <Box><Typography variant='h2'>No items!</Typography></Box>}
        </>
    )
}