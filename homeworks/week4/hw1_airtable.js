// 從 https://lidemy-book-store.herokuapp.com 串接 API 列出前十本書id與書名

// 因為不曾看過 lidemy-books-store 重整後正常的資料，我想說那我用 airtable 做類似的事情，串自己的 API

// 引用
require('dotenv').config();
const Airtable = require('airtable');

// 環境變數
const apikey = process.env.AIRTABLE_API_KEY;
const tableBase = process.env.AIRTABLE_BASE;

// Airtable 認證
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: apikey,
});

const base = Airtable.base(tableBase);

base('Table 1')
  .select({
    // maxRecords 選擇該 Table 前 10 項
    maxRecords: 10,
    view: 'Grid view',
  })
  .eachPage(
    (records, fetchNextPage) => {
      // Airtable 好像以 page 為單位呼叫資料

      records.forEach((record) => {
        console.log(`${record.get('id')} 《${record.get('name')}》`);
      });

      // 呼叫下一頁用 `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
