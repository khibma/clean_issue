import {React, DataSource, Immutable, UseDataSource} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import {DataSourceSelector, AllDataSourceTypes} from 'jimu-ui/advanced/data-source-selector';
import { TextInput } from 'jimu-ui';
import { JimuMapViewSelector SettingRow, SettingSection} from "jimu-ui/advanced/setting-components";
import {IMConfig} from '../config';
//import {ArcGISDataSourceTypes} from 'jimu-arcgis';



export default class Setting extends React.PureComponent<AllWidgetSettingProps<{IMConfig}>, {}>{
  //supportedTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.WebMap]);
/*    constructor(props){
    super(props);
    this.state = {
      layerTextareaValue:
        this.props.config?.reportingURL === undefined
          ? ""
          : this.props.config?.layerUrls.join("\n"),
    };

  }  */

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
  }

  onReportingURLChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.reportingURL('reportingURL', evt.currentTarget.value)
    });
  }

  // Render
  render(){
    return <div className="widget-setting p-2">  

    <SettingSection
      title={this.props.intl.formatMessage({
        id: "Map-Layer",
        defaultMessage: "Set the map and facility layer" //defaultI18nMessages.layers,
      })}
    >
      <SettingRow>      
        <JimuMapViewSelector
          onSelect={this.onMapSelected}
          useMapWidgetIds={this.props.useMapWidgetIds}
        />
      </SettingRow>
{/*       <SettingRow>

      <DataSourceSelector 
          types={Immutable([AllDataSourceTypes.FeatureLayer])}
                useDataSourcesEnabled={true} 
                mustUseDataSource={true}
                useDataSources={this.props.useDataSources}
                onChange={this.onDataSourceChange}
                widgetId={this.props.id}
      /> 
      </SettingRow> */}
    </SettingSection>

    <SettingSection
          title={this.props.intl.formatMessage({
            id: "reportURL",
            defaultMessage: "Reporting Service URL" //defaultI18nMessages.layers,
          })}
    >
      <SettingRow>
        <TextInput defaultValue={this.props.config.reportingURL} onChange={this.onReportingURLChange}/>

      </SettingRow>
    </SettingSection>
    </div>
  }
}