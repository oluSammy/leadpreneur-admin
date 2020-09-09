import React from 'react';
import './Agents-Search.styles.scss';
import AgentsDataTable from './../../components/Agents-Data-Table/Agents-Data-Table.components';


const AgentsSearch = () => (
    <div className="agents-search">
        <h1 className="agents-search__heading">Search Results</h1>
        <AgentsDataTable />        
    </div>
);

export default AgentsSearch;