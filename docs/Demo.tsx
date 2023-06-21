import { List, ListItem, ListItemText, Pagination } from '@mui/material';
import axios from 'axios';
import { SWRConfig } from 'swr';
import {
  SWRPaginationConfigProvider,
  laravelAdaptor,
  mui5Adaptor,
  useSWRPagination,
} from 'swr-pagination';

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <SWRPaginationConfigProvider
        uiAdaptor={mui5Adaptor}
        apiAdaptor={laravelAdaptor}
        defaultPageSize={5}
      >
        <PostList />
      </SWRPaginationConfigProvider>
    </SWRConfig>
  );
}

function PostList() {
  const { data, paginationProps } = useSWRPagination('/posts');
  return (
    <div>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.author} />
          </ListItem>
        ))}
      </List>
      <Pagination {...paginationProps} />
    </div>
  );
}
