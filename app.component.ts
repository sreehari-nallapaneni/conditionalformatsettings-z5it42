import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  IDataOptions,
  PivotView,
  FieldListService,
  ConditionalFormattingService,
  IDataSet,
} from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

/**
 * Pivot Table Sample with Conditional Formatting.
 */
/* tslint:disable */
declare var require: any;
// let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');

import { Pivot_Data } from './Pivot_Data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.css'],
  providers: [FieldListService, ConditionalFormattingService],
})
export class AppComponent {
  public dataSourceSettings: IDataOptions;
  public gridSettings: GridSettings;
  s;
  @ViewChild('pivotview')
  public pivotObj: PivotView;

  ngOnInit(): void {
    this.gridSettings = {
      columnWidth: 100,
    } as GridSettings;

    this.dataSourceSettings = {
      dataSource: Pivot_Data,
      expandAll: false,
      enableSorting: true,
      columns: [{ name: 'Id_4726040516', caption: 'Status' }],
      rows: [
        { name: 'smName' },
        { name: 'Id_8918073835', caption: 'State' },
        { name: 'assignedToName' },
      ],
      values: [{ name: 'Id_4726040516', caption: 'Status' }],
      // conditionalFormatSettings: [
      //   {
      //     measure: 'In_Stock',
      //     label: 'Cleaners',
      //     value1: 5000,
      //     conditions: 'LessThan',
      //     style: {
      //       backgroundColor: '#80cbc4',
      //       color: 'black',
      //       fontFamily: 'Tahoma',
      //       fontSize: '12px',
      //     },
      //   },
      //   {
      //     value1: 400,
      //     label: 'FY 2016',
      //     measure: 'In_Stock',
      //     conditions: 'LessThan',
      //     style: {
      //       backgroundColor: '#f48fb1',
      //       color: 'black',
      //       fontFamily: 'Tahoma',
      //       fontSize: '12px',
      //     },
      //   },
      // ],
    };
  }
}
