import { usePcfContext } from '../services/PcfContext';
import { useStyles } from '../styles/Styles';
import Tag from './Tag';
import TagLink from './TagLink';


const TagList = (): JSX.Element => {

    const pcfcontext = usePcfContext()
    const styles = useStyles();
    return (

      <div className={styles.tagStack}>
        {pcfcontext.tagValues()?.map((t,i) => 
          {
            if (pcfcontext.openRecordOnClick) {
              return <TagLink id={t.id} name={t.name} key={'tag-'+i}></TagLink>
            } else {
              return <Tag id={t.id} name={t.name} key={'tag-'+i}></Tag>
            }
          }
        )}
      </div>
    )
}

export default TagList


