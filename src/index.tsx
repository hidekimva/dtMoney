import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {
    transaction: Model
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id:1,
  //         title: 'Desenvolvimento de Software',
  //         type:'deposit',
  //         category: 'Dev',
  //         amount: 6000,
  //         createdAt: new Date('2022-02-19 09:00:00')
  //       },
  //       {
  //         id:2,
  //         title: 'Aluguel de casa',
  //         type:'withdraw',
  //         category: 'Casa',
  //         amount: 800,
  //         createdAt: new Date('2022-02-05 09:00:00')
  //       },
  //     ]
  //   })
  // },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schemas, request) => {
      const data = JSON.parse(request.requestBody);

      return schemas.create('transaction', data)
    })
  }
  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);