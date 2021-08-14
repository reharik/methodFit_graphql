import React from "react";
// import styled from "styled-components";
import { useGetSessionsQuery,Session } from "../generated/graphql";
import {columns} from "./DataTable/schemas/sessionList";
import {DataTable} from "./DataTable/DataTable";

	export const SessionsList = ():JSX.Element|null => {
		const {data, loading, error} = useGetSessionsQuery( {variables: {
			clientId: "2317"
		}});
		if(loading || error ) {
			return null;
		}
	return (<DataTable<Session> columns={columns} tableData={data?.sessions as Session[]}></DataTable>);
	};
