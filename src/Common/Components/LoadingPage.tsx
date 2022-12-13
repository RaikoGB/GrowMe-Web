import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Grid, Box } from '@mui/material';

const LoadingPage: React.FunctionComponent = () => {
    return (
        <>
            <Skeleton variant="rounded" animation="wave" height={60} />
            <br></br>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" animation="wave" height={160} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" animation="wave" height={160} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" animation="wave" height={160} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" animation="wave" height={160} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
            </Grid>
            <br></br>
            <Skeleton sx={{ height: 400 }} animation="wave" variant="rectangular" />
            <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={20} width="80%" />
            <br></br>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={5}>
                    <Skeleton animation="wave" variant="circular" width={100} height={100} />
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton
                            animation="wave"
                            height={20}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                        <Skeleton animation="wave" height={20} width="40%" />
                    </Box>
                </Grid>
            </Grid>
            <br></br>
            <Skeleton variant="rounded" animation="wave" height={200} />
        </>
    );
};

export default LoadingPage;