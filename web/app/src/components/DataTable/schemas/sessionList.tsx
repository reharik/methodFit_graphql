import { DateTime } from 'luxon';

export const columns = [
	{
		propertyName: 'CreatedDate',
		headerDisplay: 'Purchase Date',
		formatProperty: ({ value }: { value: string }): string => {
			return DateTime.fromISO(value).toFormat('yyyy LLL dd');
		},
		width: '175px',
	},
	{
		propertyName: 'AppointmentType',
		width: '200px',
	},
	{
		propertyName: 'Cost',
		formatProperty: ({ value }: { value: number }): number => {
			return value || 0;
		},
	},
	{
		propertyName: 'SessionUsed',
		formatProperty: ({ value }: { value: boolean }): string => {
			return value.toString();
		},
		width: '175px',
	},
];
