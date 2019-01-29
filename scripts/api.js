'use strict';

const api = (function() {
  const BASE_URL =
    'https://thinkful-list-api.herokuapp.com/PaymanAlex/bookmarks';
  const headers = {
    'Content-Type': 'application/json'
  };

  function listApiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = true;
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          throw new Error(data.message);
        }
        return data;
      });
  }

  function createItem(data) {
    const params = { method: 'POST', headers, body: data };
    return listApiFetch(`${BASE_URL}`, params);
  }

  function getItems() {
    const params = { method: 'GET', headers };
    return listApiFetch(`${BASE_URL}`, params);
  }

  return {
    createItem,
    getItems
  };
})();
