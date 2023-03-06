import { Image } from "@fluentui/react-components"
import { useRecordImage } from "../hooks/useRecordImage"
import { usePcfContext } from "../services/PcfContext"
import { iTagInfo } from "../services/PcfContextService"

const TagImage = ({id,name}:iTagInfo, key:string): JSX.Element => {

    const pcfcontext = usePcfContext()
    const imgsize = pcfcontext.size === "small" ? 14 : pcfcontext.size === "medium" ? 16 : pcfcontext.size === "large" ? 20 : 24
    const {imagesrc, isError,isLoading} = useRecordImage(pcfcontext.entityname, id)
    if (isLoading || isError || !imagesrc || imagesrc === '') {
      return <></>
    } 
    else {
      return(
        <Image
          alt={name + ' image'}
          key={'tagimage-' + key}
          shape={pcfcontext.imageshape}
          src={imagesrc}
          height={imgsize}
          width={imgsize}
        />
      )
    }
}

export default TagImage
