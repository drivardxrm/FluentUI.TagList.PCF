/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-undef */

import { Theme } from '@fluentui/react-components';
import { IInputs } from '../generated/ManifestTypes'
import { getTheme } from '../utils/theme';

export interface IPcfContextServiceProps{
  context: ComponentFramework.Context<IInputs>;
  instanceid: number;
}

export interface iTagInfo{
  id: string;
  name: string;
}

export class PcfContextService {
  instanceid:number;
  dataset : ComponentFramework.PropertyTypes.DataSet;
  context: ComponentFramework.Context<IInputs>;
  entityname : string;
  showRecordImage:boolean;
  openRecordOnClick:boolean;
  theme : Theme;
  appearance: 'filled' | 'ghost' | 'outline' | 'tint'
  shape: 'circular' | 'rounded' | 'square'
  color: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'
  size: 'small' | 'medium' | 'large' | 'extra-large'
  imageshape: 'circular' | 'rounded' | 'square'
  

  constructor (props?:IPcfContextServiceProps) {
    if (props) {
      this.instanceid = props.instanceid
      this.entityname = props.context.parameters.tagsDataSet.getTargetEntityType()
      this.context = props.context
      this.dataset = props.context.parameters.tagsDataSet
      this.showRecordImage = props.context.parameters.showRecordImage.raw === 'true'
      this.openRecordOnClick = props.context.parameters.openRecordOnClick.raw === 'true'
      this.theme = getTheme(props.context.parameters.theme.raw ?? 'WebLight')
      this.appearance = props.context.parameters.appearance.raw ?? 'filled'
      this.size = props.context.parameters.size.raw ?? 'medium'
      this.shape = props.context.parameters.shape.raw ?? 'rounded'
      this.color = props.context.parameters.color.raw ?? 'brand'
      this.imageshape = props.context.parameters.imageshape.raw ?? 'rounded'

    }
  }


  
  tagValues():iTagInfo[] {
    return this.dataset?.sortedRecordIds.map((recordId) => {
      let currentRecord = this.dataset?.records[recordId]  
      return {
        id: recordId ?? '',
        name: currentRecord?.getFormattedValue('tagLabel') ?? '',
      }
    }) ?? []
  }


  async getEntityMetadata (entityname:string) : Promise<ComponentFramework.PropertyHelper.EntityMetadata> {
    return this.context.utils.getEntityMetadata(entityname)
  }

  async getRecordImage (entityType:string, id:string, primaryimage:string) : Promise<string> {

    let record = await this.context.webAPI.retrieveRecord(entityType,id,`?$select=${primaryimage}`)
    return  record?.[primaryimage]
            ? `data:image/jpeg;base64,${record?.[primaryimage]}`
            : ''
  }

  async openRecord (entityName:string,entityId:string):Promise<ComponentFramework.NavigationApi.OpenFormSuccessResponse> {
    return this.context.navigation.openForm(
      {
        entityName: entityName,
        entityId: entityId
      }
    )
  }
}
