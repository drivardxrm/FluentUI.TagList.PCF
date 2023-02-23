import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  tagStack: {  
    display: 'flex',
    flexWrap: 'wrap',
    width: 'fit-content',
    height: 'fit-content',
    boxSizing: 'border-box',
    '> *': {
      textOverflow: 'ellipsis',
    },
    flexDirection: 'row',
    marginBottom: '5px',
    '> :not(:last-child)': {
      marginRight: '5px',
    }
  }
});

