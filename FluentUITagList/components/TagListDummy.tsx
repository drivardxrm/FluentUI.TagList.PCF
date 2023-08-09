import { FluentProvider } from '@fluentui/react-components';
import { webLightTheme } from "@fluentui/react-components";
import { iTagInfo } from '../services/PcfContextService';
import { useStyles } from '../styles/Styles';
import TagDummy from './TagDummy';

export interface ITagListDummyProps {
  appearance: 'filled' | 'ghost' | 'outline' | 'tint'
  shape: 'circular' | 'rounded' | 'square'
  color: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'
  size: 'small' | 'medium' | 'large' | 'extra-large'
}

const TagListDummy = (props:ITagListDummyProps): JSX.Element => {

    const dummies:iTagInfo[] = [
      {id:'1',name:'Tag 1'},
      {id:'2',name:'Tag 2'},
      {id:'3',name:'Tag 3'},
    ]
    
    const styles = useStyles();
    return (
          <FluentProvider theme={webLightTheme}>
            <div className={styles.tagStack}>
              {dummies?.map((t,i) => 
                <TagDummy id={t.id} name={t.name} shape={props.shape} appearance={props.appearance} color={props.color} size={props.size} key={'tag-'+i} ></TagDummy>
              )}
            </div>
          </FluentProvider>
      
    )
}

export default TagListDummy


