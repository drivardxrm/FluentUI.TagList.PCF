import { Link } from "@fluentui/react-components"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"
import { useStyles } from "../styles/Styles"
import Tag from "./Tag"

const TagLink = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    const styles = useStyles();
    return(
      <Link 
        key={'taglink-' + key}
        className={styles.link}
        appearance='subtle' 
        onClick={() => {pcfcontext.openRecord(pcfcontext.entityname,id)}}
      >
        <Tag id={id} name={name} key={key}></Tag>
      </Link>
    )
}

export default TagLink
