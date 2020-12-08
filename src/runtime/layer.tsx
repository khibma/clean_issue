/** @jsx jsx */
import {AllWidgetProps, BaseWidget, WidgetJson, React, ReactDOM, jsx, Immutable, WidgetType} from 'jimu-core';
import {JimuMapView, JimuFeatureLayerView, FeatureLayerDataSource } from 'jimu-arcgis';


interface Stuff {
	jimuMapView?: JimuMapView;
	flayer: FeatureLayerDataSource ;
  }

export default class layer_display extends BaseWidget<
  AllWidgetProps<WidgetJson>,
  any
>{

	constructor(props){
		super(props);
	
		this.state = {}

	  }

	  getLayerObject = (ds: FeatureLayerDataSource) => {
		return ds.layer; // this can be null
	 }

  };