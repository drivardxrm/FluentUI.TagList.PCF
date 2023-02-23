

import { FluentUITagList } from '../FluentUITagList/index';
import { IInputs, IOutputs } from '../FluentUITagList/generated/ManifestTypes';
import { ComponentStory, Meta, Story, StoryObj } from '@storybook/react';
import { ComponentFrameworkMockGenerator, ComponentFrameworkMockGeneratorReact, DataSetMock, EnumPropertyMock, ShkoOnline } from '@shko.online/componentframework-mock';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useArgs } from '@storybook/client-api'
import { useMemo } from '@storybook/addons';

interface StoryArgs {
  tagsDataSet: ComponentFramework.PropertyTypes.DataSet,
  showRecordImage: boolean,
  openRecordOnClick: boolean,
  appearance: 'filled' | 'ghost' | 'outline' | 'tint',
  shape: 'circular' | 'rounded' | 'square',
  color: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning',
  size: 'small' | 'medium' | 'large' | 'extra-large',
  theme: 'WebLight' | 'WebDark' | 'TeamsLight' | 'TeamsDark' | 'TeamsHighContrast'
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
        theme: EnumPropertyMock<'WebLight' | 'WebDark' | 'TeamsLight' | 'TeamsDark' | 'TeamsHighContrast'>
      }, innerContainer)

      
      
      const itemsLogicalName = '!!!items';
  
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
      mockGenerator.context._parameters.tagsDataSet._InitItems(
        [
          {
              myId: '1',
              ['tagLabel']: 'item1'   
          },
          {
            myId: '2',
            ['tagLabel']: 'item2'   
          },
          {
            myId: '3',
            ['tagLabel']: 'item3'   
          }
        ]
      );

      mockGenerator.ExecuteInit()
      return mockGenerator
    
  }, [container.current])

  if (mockGenerator) {
    // mockGenerator.context._parameters.tagsDataSet._SetValue(args.customselecttext);
    //mockGenerator.context._parameters.appearance._SetValue(args.appearance)
    //mockGenerator.context._parameters.color._SetValue( args.color );
    // mockGenerator.context._parameters.lookupfield._SetValue( args.lookupfield );
    // mockGenerator.context._parameters.showOpenRecordButton._SetValue( args.showOpenRecordButton ? 'true' : 'false');
    // mockGenerator.context._parameters.showRecordImage._SetValue( args.showRecordImage ? 'true' : 'false');
    mockGenerator.ExecuteUpdateView()
  }

  useEffect(() => { setLoaded(true) }, [container.current])
  return <div><div ref={container} ></div></div>

    //     new ComponentFrameworkMockGenerator(FluentUITagList, {
    //       tagsDataSet: DataSetMock,
    //       showRecordImage: EnumPropertyMock,
    //       navigateToOnClick: EnumPropertyMock, 
    //       appearance: EnumPropertyMock,
    //       size: EnumPropertyMock,
    //       shape: EnumPropertyMock,
    //       color: EnumPropertyMock, 
    //       theme: EnumPropertyMock  
    //     });

    // const itemsLogicalName = '!!!items';
  
    // mockGenerator.metadata.initMetadata([
    //     {
    //         EntitySetName: itemsLogicalName,
    //         LogicalName: itemsLogicalName,
    //         PrimaryIdAttribute: 'myId',
    //         PrimaryNameAttribute: 'tagLabel',
    //         PrimaryImageAttribute: 'entityimage',
    //         Attributes: ['myId', 'tagLabel', 'entityimage'].map(
    //             (logicalName) =>
    //                 ({
    //                     EntityLogicalName: itemsLogicalName,
    //                     LogicalName: logicalName,
    //                 } as ShkoOnline.StringAttributeMetadata),
    //         ), 
                
            
    //     },
    // ]);

    // mockGenerator.context._parameters.tagsDataSet._Bind(itemsLogicalName, 'items');
    // //mockGenerator.context._parameters.tagsDataSet._InitItems(args.tagsDataSet);

    

    // mockGenerator.ExecuteInit();
    // return mockGenerator.ExecuteUpdateView();
    
};



export const Primary = Template.bind({}) as StoryObj<StoryArgs>
// Primary.args = {
//   tagsDataSet: [
//     {
//         myId: '1',
//         ['tagLabel']: 'item1'   
//     },
//     {
//       myId: '2',
//       ['tagLabel']: 'item2'   
//     },
//     {
//       myId: '3',
//       ['tagLabel']: 'item3'   
//     }
//   ]
// };

