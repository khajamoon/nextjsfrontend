'use client';

import { Todo } from '@/app/mockData/todos';
import { AnalyticalTable, Button, List, ListItemType, ListPropTypes, StandardListItem, ValueState } from '@ui5/webcomponents-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState ,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getClients } from '../redux/features/jobs/jobsSlice';

interface TodoListProps {
  items: Todo[];
}

export function TodoList({ items }: TodoListProps) {
  const { clients } = useSelector((state: RootState) => state.jobsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [isrefresh, setRefresh] = useState(false)
  const router = useRouter();
  useEffect(() => {

    dispatch(getClients({}));
  }, [isrefresh]);
  console.log(clients, "clientsss");

  const handleRefresh = () => {
    setRefresh(!isrefresh)

  }
  const toolbar = () => (
    <>
      <Button
        tooltip="Invoice Upload File"
        design="Transparent"
        icon="add-employee"
        onClick={handleRefresh}
      >Refresh</Button>
      
    </>
  );


  return (

    <>

      {
        clients &&
        <AnalyticalTable
          columns={[
            {
              Header: 'id',
              accessor: 'id',
              headerTooltip: 'Full Name'
            },
            {
              Header: 'username',
              accessor: 'username',
              className: 'superCustomClass',
              disableFilters: false,
              disableGroupBy: true,
              disableSortBy: false,

            },
            {
              Header: 'Password',
              accessor: 'password'
            },


          ]}
          data={clients.data}
          filterable
          groupBy={[]}
          groupable
          infiniteScroll
          onColumnsReorder={function _a() { }}
          onGroup={function _a() { }}
          onLoadMore={function _a() { }}
          onRowClick={function _a() { }}
          onRowExpandChange={function _a() { }}
          onRowSelect={function _a() { }}
          onSort={function _a() { }}
          onTableScroll={function _a() { }}
          selectedRowIds={{
            '3': true
          }}
          selectionMode="SingleSelect"
          tableHooks={[]}
          withRowHighlight
          header = {toolbar()}
        />
      }
    </>




  );
}
