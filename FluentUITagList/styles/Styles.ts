import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  tagStack: {  
    display: 'flex',
    flexWrap: 'wrap',
    width: 'fit-content',
    height: 'fit-content',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    '> *': {
      textOverflow: 'ellipsis',
    },
    flexDirection: 'row',
    marginBottom: '5px',
    '> :not(:last-child)': {
      marginRight: '5px',
    }
  },
  tag: {  
    marginTop: '2px',
    marginBottom: '2px',
  },
  link: {  
    ':hover': {
      textDecorationLine: 'none'
    },
    ':active': {
      textDecorationLine: 'none'
    }

  }
});

