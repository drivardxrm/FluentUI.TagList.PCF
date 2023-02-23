import { Image } from "@fluentui/react-components"
import { useRecordImage } from "../hooks/useRecordImage"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"

// eslint-disable-next-line no-undef
const TagImage = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    const imgsize = pcfcontext.size === "small" ? 16 : pcfcontext.size === "medium" ? 18 : pcfcontext.size === "large" ? 22 : 24
    const {imagesrc, isError,isLoading} = useRecordImage(pcfcontext.entityname, id)
    if (isLoading || isError || !imagesrc || imagesrc === "") {
      return <></>
    } 
    else {
      return(
        <Image
          alt={name + ' image'}
          shape='rounded'
          src={imagesrc}
          height={imgsize}
          width={imgsize}
        />
      )
    }
}

export default TagImage
