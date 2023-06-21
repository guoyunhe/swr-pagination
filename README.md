# swr-pagination

SWR based pagination hook that connects RESTful API and Pagination components.

API adaptors for:

- Laravel (PHP)
- AdonisJS (Node.js)
- Rails (Ruby)
- DJango (Python)

UI adaptors for:

- Ant Design
- Fusion Design
- MUI (Material UI)

## Install

```bash
npm i swr swr-pagination
```

## Usage

```jsx
import { List, ListItem, ListItemText, Pagination } from '@mui/material';
import axios from 'axios';
import { SWRConfig } from 'swr';
import {
  SWRPaginationConfigProvider,
  laravelAdaptor,
  mui5Adaptor,
  useSWRPagination,
} from 'swr-pagination';

function App() {
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
```
