import React from 'react';
import { Card, CardContent, Typography, useMediaQuery, Grid, Box } from '@material-ui/core';

const ArticleInfo = ({ doiInfo }) => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const journalInfo = `${doiInfo['container-title']} volume ${doiInfo.volume}, pages${doiInfo.page} (${doiInfo['published-print']['date-parts'][0][0]})`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" width="70%">
      <Card>
        <CardContent>
          <Typography variant={isSmallScreen ? "h5" : "h4"}>
            {doiInfo.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? "body2" : "h6"}>
                Author: 
                {doiInfo.author.map((author, index) => (
                  <span key={index}>
                    {author.given} {author.family}
                    {index < doiInfo.author.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? "body2" : "body1"}>
                Journal: {journalInfo}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ArticleInfo;
