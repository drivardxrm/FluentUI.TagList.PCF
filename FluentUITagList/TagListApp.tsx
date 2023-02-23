import { FluentProvider } from '@fluentui/react-components'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TagList from './components/TagList';
import { PcfContextProvider } from './services/PcfContext';
import { IPcfContextServiceProps, PcfContextService } from './services/PcfContextService';



export interface ITagListProps {
    //properties : PCF =>
    dataset?: ComponentFramework.PropertyTypes.DataSet
    showrerecordimage: boolean
    appearance: "filled" | "ghost" | "outline" | "tint"
    shape: "circular" | "rounded" | "square"
    color: "brand" | "danger" | "important" | "informative" | "severe" | "subtle" | "success" | "warning"
    size: "small" | "medium" | "large" | "extra-large"
    theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"
    
 }

// declare outside of FC element so it doesnt gets evaluated at each rerenders
const queryClient = new QueryClient({
  queryCache: new QueryCache(), // creates a new querycahe for each instance of the control on a page
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
      // IMPORTANT otherwise data will be refreshed everytime the focus on the PCF is lost and regained
      // https://react-query.tanstack.com/guides/window-focus-refetching#_top
    }
  }
})


// eslint-disable-next-line no-undef
const TagListApp = (props:IPcfContextServiceProps): JSX.Element => {
    const pcfcontextservice = new PcfContextService(props)
    
    return (
        
        
      <QueryClientProvider client={queryClient} contextSharing={false}>
        <PcfContextProvider pcfcontext={pcfcontextservice}>
          <FluentProvider theme={pcfcontextservice.theme}>
            <TagList/>
          </FluentProvider>
        </PcfContextProvider>
      </QueryClientProvider>
        
    )
}

export default TagListApp


