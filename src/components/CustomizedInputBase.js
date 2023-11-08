import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '79%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase({ onFetch }) {
  const classes = useStyles();
  const [doi, setDoi] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();  
      onFetch(doi);
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Enter DOI"
        inputProps={{ 'aria-label': 'enter doi' }}
        value={doi}
        onChange={e => setDoi(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={(event) => {event.preventDefault(); onFetch(doi);}}>
  <SearchIcon />
</IconButton>

    </Paper>
  );
}
