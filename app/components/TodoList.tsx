'use client';

import { Todo } from '@/app/mockData/todos';
import { AnalyticalTable, List, ListItemType, ListPropTypes, StandardListItem, ValueState } from '@ui5/webcomponents-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getClients } from '../redux/features/jobs/jobsSlice';

interface TodoListProps {
  items: Todo[];
}

export function TodoList({ items }: TodoListProps) {
  const { clients } = useSelector((state: RootState) => state.jobsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [isrefresh,setRefresh ] =useState(false)
  const router = useRouter();
  useEffect(() => {

    dispatch(getClients({}));
  }, [isrefresh]);
  console.log(clients, "clientsss");

  const handleRefresh = () =>
    {
      setRefresh(!isrefresh)

    }


  return (
    <div>
      {clients &&
        <>
          <h1>Welcome</h1>
          <button onClick={handleRefresh} >Refresh</button>
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
            header="Table Title"
            infiniteScroll
            onColumnsReorder={() => { }}
            onGroup={() => { }}
            onLoadMore={() => { }}
            onRowClick={() => { }}
            onRowExpandChange={() => { }}
            onRowSelect={() => { }}
            onSort={() => { }}
            onTableScroll={() => { }}
            rowHeight={44}
            selectedRowIds={{
              3: true
            }}
            selectionMode="SingleSelect"
            withRowHighlight

          />
        </>

      }






    </div>
  );
}
