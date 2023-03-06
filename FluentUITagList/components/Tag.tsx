import { Badge } from "@fluentui/react-components"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"
import { useStyles } from "../styles/Styles"
import TagImage from "./TagImage"

const Tag = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    const styles = useStyles();
    return(
        <Badge key={`tag-${key}`}
          className={styles.tag}
          shape={pcfcontext.shape} 
          appearance={pcfcontext.appearance}
          color={pcfcontext.color}
          size={pcfcontext.size}
          icon={pcfcontext.showRecordImage ? <TagImage id={id} name={name}/> : undefined}
        >
          {name}  
        </Badge>
      )
}

export default Tag
