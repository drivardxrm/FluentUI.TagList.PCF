import { Badge } from "@fluentui/react-components"
import { useStyles } from "../styles/Styles"
import { ITagListDummyProps } from "./TagListDummy"

export interface iTagDummyProps extends ITagListDummyProps{ 
  id: string;
  name: string;
}


const TagDummy = ({id,name,shape,appearance,color,size}:iTagDummyProps, key:string): JSX.Element => {

    const styles = useStyles();
    return(
        <Badge key={`tag-${key}`}
          className={styles.tag}
          shape={shape} 
          appearance={appearance}
          color={color}
          size={size}
          //icon={pcfcontext.showRecordImage ? <TagImage id={id} name={name}/> : undefined}
        >
          {name}  
        </Badge>
      )
}

export default TagDummy
