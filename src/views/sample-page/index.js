import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from 'views/dashboard/Default/EarningCard';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    // <>
    //   <MainCard title="Sample Card">
    //       <Typography variant="body2">
    //           Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
    //           ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
    //           reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
    //           qui officiate descent molls anim id est labours.
    //       </Typography>
    //   </MainCard>
    //   <Grid item lg={4} md={6} sm={6} xs={12}>
    //     <EarningCard isLoading={isLoading} />
    //   </Grid>
    // </>
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SamplePage;
