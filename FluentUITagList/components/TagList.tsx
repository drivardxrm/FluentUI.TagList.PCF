import { Badge,  FluentProvider } from '@fluentui/react-components'
import * as React from 'react';
import { usePcfContext } from '../services/PcfContext';
import { useStyles } from '../styles/Styles';
import Tag from './Tag';
import TagLink from './TagLink';
// import { IPcfContextServiceProps } from './services/PcfContextService';
// import { useStyles } from './styles/Styles';
// import { getTheme } from './utils/theme';


// export interface ITagListProps {
//     //properties : PCF =>
//     dataset?: ComponentFramework.PropertyTypes.DataSet
//     showrerecordimage: boolean
//     appearance: "filled" | "ghost" | "outline" | "tint"
//     shape: "circular" | "rounded" | "square"
//     color: "brand" | "danger" | "important" | "informative" | "severe" | "subtle" | "success" | "warning"
//     size: "small" | "medium" | "large" | "extra-large"
//     theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"
    
//  }



// eslint-disable-next-line no-undef
const TagList = (): JSX.Element => {

    const pcfcontext = usePcfContext()
    const styles = useStyles();
    return (

      <div className={styles.tagStack}>
        {pcfcontext.tagValues()?.map((t,i) => 
          {
            return <div>
              {pcfcontext.openRecordOnClick &&
                <TagLink id={t.id} name={t.name} key={'tag-'+i}></TagLink>
              }
              {!pcfcontext.openRecordOnClick &&
                <Tag id={t.id} name={t.name} key={'tag-'+i}></Tag>
              }
            </div> 
          }
        )}
      </div>
    )
}

export default TagList


