import { Badge, Link } from "@fluentui/react-components"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"
import Tag from "./Tag"
import TagImage from "./TagImage"

// eslint-disable-next-line no-undef
const TagLink = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    return(
      <Link 
        key={'link-' + key} 
        appearance='subtle' 
        onClick={() => {pcfcontext.openRecord(pcfcontext.entityname,id)}}
      >
        <Tag id={id} name={name} key={key}></Tag>
      </Link>
    )
}

export default TagLink
