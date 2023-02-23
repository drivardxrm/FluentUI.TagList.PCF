import { Badge } from "@fluentui/react-components"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"
import TagImage from "./TagImage"

// eslint-disable-next-line no-undef
const Tag = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    return(
        <Badge key={`tag-${key}`}
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
