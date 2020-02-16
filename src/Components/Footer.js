import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MailOutlineOutlined as Mail } from '@material-ui/icons';

const useStyles = makeStyles({
  line: {
    margin: '10px 0'
  }
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <Button
        variant="outlined"
        onClick={() =>
          window.open('mailto:welvin07@gmail.com', '_blank', 'noopener')
        }
        startIcon={<Mail />}
      >
        Say Hello
      </Button>
      <hr className={classes.line} />
      <Typography variant="subtitle1">
        Copyright 2020 &copy; Welvin Bun. All rights reserved.
      </Typography>
    </div>
  );
};
