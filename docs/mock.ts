import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onGet(/\/posts\?.*/).reply(({ url }) => {
  const params = new URLSearchParams(url?.split('?')[1]);
  const page = Number(params.get('page'));
  const perPage = Number(params.get('perPage'));
  return [
    200,
    {
      total: 50,
      data: [
        {
          id: page * perPage - 4,
          title: 'Post ' + (page * perPage - 4),
          author: 'Author ' + (page * perPage - 4),
        },
        {
          id: page * perPage - 3,
          title: 'Post ' + (page * perPage - 3),
          author: 'Author ' + (page * perPage - 3),
        },
        {
          id: page * perPage - 2,
          title: 'Post ' + (page * perPage - 2),
          author: 'Author ' + (page * perPage - 2),
        },
        {
          id: page * perPage - 1,
          title: 'Post ' + (page * perPage - 1),
          author: 'Author ' + (page * perPage - 1),
        },
        {
          id: page * perPage,
          title: 'Post ' + page * perPage,
          author: 'Author ' + page * perPage,
        },
      ],
    },
  ];
});
