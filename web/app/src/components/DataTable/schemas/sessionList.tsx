import React from "react";
import {DateTime} from "luxon";

export const columns = [
	{
		propertyName: 'CreatedDate',
		headerDisplay: 'Purchase Date',
		rowColumnComponent: ({ value }:{value:string}):JSX.Element => {
			return (<span>{DateTime.fromISO(value).toFormat('yyyy LLL dd')}</span>)
		},
		sortable: true,
	},
	{
		propertyName: 'AppointmentType',
		width:"150px",
		sortable: true,
	},
	{
		propertyName: 'Cost',
		rowColumnComponent: ({ value }:{value:number}):JSX.Element => {
			return (<span>{`$${value || 0}`}</span>)
		},
	},
	{
		propertyName: 'SessionUsed',
		rowColumnComponent: ({ value }:{value:boolean}):JSX.Element => {
			return (<span>{value.toString()}</span>)
		},
		sortable: true	},
	
];