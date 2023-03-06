

import { FluentUITagList } from '../FluentUITagList/index';
import { IInputs, IOutputs } from '../FluentUITagList/generated/ManifestTypes';
import { ArgTypes, ComponentStory, Meta, Story, StoryObj } from '@storybook/react';
import { ComponentFrameworkMockGenerator, ComponentFrameworkMockGeneratorReact, DataSetMock, EnumPropertyMock, ShkoOnline } from '@shko.online/componentframework-mock';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useArgs } from '@storybook/client-api'
import { useMemo } from '@storybook/addons';
import { ImgDavid, ImgHomer } from './mock/EntityImages';

interface StoryArgs {
  tagsDataSet: { [column: string]: any }[],
  showRecordImage: boolean,
  openRecordOnClick: boolean,
  appearance: 'filled' | 'ghost' | 'outline' | 'tint',
  shape: 'circular' | 'rounded' | 'square',
  color: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning',
  size: 'small' | 'medium' | 'large' | 'extra-large',
  theme: 'WebLight' | 'WebDark' | 'TeamsLight' | 'TeamsDark' | 'TeamsHighContrast',
  imageshape: 'circular' | 'rounded' | 'square'
}

const argTypes: Partial<ArgTypes<StoryArgs>> = {
  appearance: {
    control: {
      type: 'select',
      options: ['filled', 'ghost', 'outline', 'tint']
    }
  },
  shape: {
    control: {
      type: 'select',
      options: ['circular', 'rounded', 'square']
    }
  },
  color: {
    control: {
      type: 'select',
      options: ['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning']
    }
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large', 'extra-large']
    }
  },
  theme: {
    control: {
      type: 'select',
      options: ['WebLight', 'WebDark', 'TeamsLight', 'TeamsDark', 'TeamsHighContrast']
    }
  },
  imageshape: {
    control: {
      type: 'select',
      options: ['circular', 'rounded', 'square']
    }
  },

}

const defaultArgs: Partial<StoryArgs> = {
  tagsDataSet: [
    {
      myId: '1',
      ['tagLabel']: 'item1',
    },
    {
      myId: '2',
      ['tagLabel']: 'item2'
    },
    {
      myId: '3',
      ['tagLabel']: 'item3'
    },
    {
      myId: '4',
      ['tagLabel']: 'item4'
    },
  ],
  appearance: 'filled',
  shape: 'rounded',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
  showRecordImage: false,
  openRecordOnClick: false,
  imageshape: 'rounded'
}

export default {
  title: 'PCF Component/FluentUITagList',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' , maxWidth:'350px'}}>
        {Story()}
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypes
  },
  args: {
    ...defaultArgs
  }
} as Meta<StoryArgs>;




// eslint-disable-next-line no-empty-pattern
const Template = ({ }: StoryArgs) => {
  const container = useRef<HTMLDivElement>(null)
  const [, setLoaded] = useState<boolean>(false)
  const [args, updateArgs] = useArgs() as unknown as [
    args: StoryArgs,
    updateArgs: (args: Partial<StoryArgs>) => void,
  ]
  const mockGenerator= useMemo(() => {
    
    if (container.current === null) return
    
    const innerContainer = document.createElement('div')
    container.current.appendChild(innerContainer)

    const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
      new ComponentFrameworkMockGenerator(FluentUITagList, {
        tagsDataSet: DataSetMock,
        showRecordImage: EnumPropertyMock<'false' | 'true'>,
        openRecordOnClick: EnumPropertyMock<'false' | 'true'>,
        appearance: EnumPropertyMock<'filled' | 'outline' | 'ghost' | 'tint'>,
        size: EnumPropertyMock<'small' | 'medium' | 'large' | 'extra-large'>,
        shape: EnumPropertyMock<'rounded' | 'square' | 'circular'>,
        color: EnumPropertyMock<'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'>,
        theme: EnumPropertyMock<'WebLight' | 'WebDark' | 'TeamsLight' | 'TeamsDark' | 'TeamsHighContrast'>,
        imageshape: EnumPropertyMock<'rounded' | 'square' | 'circular'>,
      }, innerContainer)

      
      
      const itemsLogicalName = 'contact';
  
      mockGenerator.metadata.initMetadata([
          {
              EntitySetName: itemsLogicalName,
              LogicalName: itemsLogicalName,
              PrimaryIdAttribute: 'myId',
              PrimaryNameAttribute: 'tagLabel',
              PrimaryImageAttribute: 'entityimage',
              Attributes: ['myId', 'tagLabel', 'entityimage'].map(
                  (logicalName) =>
                      ({
                          EntityLogicalName: itemsLogicalName,
                          LogicalName: logicalName,
                      } as ShkoOnline.StringAttributeMetadata),
              ), 
                  
              
          },
      ]);

      mockGenerator.context._parameters.tagsDataSet._Bind(itemsLogicalName, 'tagsDataSet');
      mockGenerator.context._parameters.tagsDataSet._InitItems(args.tagsDataSet);

      mockGenerator.context.webAPI.retrieveRecord.callsFake((entityType:string, id:string, options?:string) => {
        if (entityType === 'contact') {
          
          var img = id ==='1' ? 
            {
              entityimage: ImgDavid
            }  : 
              (id === '2' ? 
                {
                  entityimage: ImgHomer
                } : 
                {
                  entityimage: ''
                }
              )
          
          return new Promise((resolve) => resolve(img as ComponentFramework.WebApi.Entity))
        }
        return new Promise((_resolve, reject) => {
          reject(new Error('invalid'))
        })
      })


      mockGenerator.context._SetCanvasItems({
        appearance: args.appearance || undefined,
        size: args.size || undefined,
        shape: args.shape || undefined,
        color: args.color || undefined,
        theme: args.theme || undefined,
        imageshape: args.imageshape || undefined
      });

      mockGenerator.ExecuteInit()
      return mockGenerator
    
  }, [container.current])

  if (mockGenerator) {
    mockGenerator.context._parameters.appearance._SetValue( args.appearance );
    mockGenerator.context._parameters.size._SetValue( args.size );
    mockGenerator.context._parameters.shape._SetValue( args.shape );
    mockGenerator.context._parameters.color._SetValue( args.color );
    mockGenerator.context._parameters.theme._SetValue( args.theme );
    mockGenerator.context._parameters.imageshape._SetValue( args.imageshape );
    mockGenerator.context._parameters.openRecordOnClick._SetValue( args.openRecordOnClick ? 'true' : 'false');
    mockGenerator.context._parameters.showRecordImage._SetValue( args.showRecordImage ? 'true' : 'false');
    mockGenerator.ExecuteUpdateView()
  }

  useEffect(() => { setLoaded(true) }, [container.current])
  return <div><div ref={container} ></div></div>
    
};



//export const Primary = Template.bind({}) as StoryObj<StoryArgs>

export const SizeSmall = Template.bind({}) as StoryObj<StoryArgs>
SizeSmall.args = {
  size: 'small'
}
export const SizeMedium = Template.bind({}) as StoryObj<StoryArgs>
SizeMedium.args = {
  size: 'medium'
}
export const SizeLarge = Template.bind({}) as StoryObj<StoryArgs>
SizeLarge.args = {
  size: 'large'
}
export const SizeExtraLarge = Template.bind({}) as StoryObj<StoryArgs>
SizeExtraLarge.args = {
  size: 'extra-large'
}

export const AppearanceFilled = Template.bind({}) as StoryObj<StoryArgs>
AppearanceFilled.args = {
  appearance: 'filled'
}

export const AppearanceGhost = Template.bind({}) as StoryObj<StoryArgs>
AppearanceGhost.args = {
  appearance: 'ghost'
}

export const AppearanceOutline = Template.bind({}) as StoryObj<StoryArgs>
AppearanceOutline.args = {
  appearance: 'outline'
}

export const AppearanceTint = Template.bind({}) as StoryObj<StoryArgs>
AppearanceTint.args = {
  appearance: 'tint'
}

export const ShapeCircular = Template.bind({}) as StoryObj<StoryArgs>
ShapeCircular.args = {
  shape: 'circular'
}

export const ShapeRounded = Template.bind({}) as StoryObj<StoryArgs>
ShapeRounded.args = {
  shape: 'rounded'
}

export const ShapeSquare = Template.bind({}) as StoryObj<StoryArgs>
ShapeSquare.args = {
  shape: 'square'
}




