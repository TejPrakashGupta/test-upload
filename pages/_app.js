<<<<<<< HEAD
import React from 'react';
import '../styles/globals.css'


import axios from 'axios';
import config from '../config';
import getConfig from 'next/config';
const app = {};
const { publicRuntimeConfig } = getConfig();
// const apiUrl = publicRuntimeConfig.apiUrl;
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://rms.softreader.in:5000/api';


var _token = '';
if(typeof window !== 'undefined') 
_token =  sessionStorage.getItem('rms_token')




app.get = async (url,callback=function(){})=>{
  let config = {
    headers: { 
      Authorization: 'Bearer '+_token,
    } 
  } 
    var data = {};
    await axios.get(`${apiUrl}${url}`,config)
      .then(res => {
        data = res.data;
        callback(null,data)
      }).catch(err=>{
        callback(err)
        data = err;
      });
      
      return data;
}

app.post = async (url,body,callback=function(){})=>{
  // console.log("Token: ",_token )
  let config = {
    headers: {
      Authorization: 'Bearer '+_token,
    }
  }

    var data = {};
    await axios.post(`${apiUrl}${url}`,body,config)
      .then(res => {
        data = res.data;
        callback(null,data)
      }).catch(err=>{
        callback(err)
        data = err;
      });

      return data;
}

app.put = async (url,body,callback=function(){})=>{
  let config = {
    headers: {
      Authorization: 'Bearer '+_token,
    }
  }

    var data = {};
    await axios.put(`${apiUrl}${url}`,body,config)
      .then(res => {
        data = res.data;
        callback(null,data)
      }).catch(err=>{
        callback(err)
        data = err;
      });

      return data;
}

app.delete = async (url,body,callback=function(){})=>{
  let headers = {
      Authorization: 'Bearer '+_token,
    } 
    

    var data = {};
    await axios.delete(`${apiUrl}${url}`, {data:body, headers})
      .then(res => {
        data = res.data;
        callback(null,data)
      }).catch(err=>{
        callback(err)
        data = err;
      });
      
      return data;
}

global.app = app;

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  
  </>
)}

export default MyApp

=======
// if you want to fetch data using the same code but in different file the best way is to use a HOC component that works like React Query

// in this file the issue was that 'apiUrl' is being used in the place of 'apiUrl', simply changing to apiUrl solves the problem

// have a look at data fetch component 


import React from 'react';
import '../styles/globals.css'

import axios from 'axios';
import config from '../config';
import getConfig from 'next/config';
import { Query } from 'mongoose'
const app = {};

const { publicRuntimeConfig } = getConfig();
// const apiUrl = publicRuntimeConfig.apiUrl;
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://rms.softreader.in:5000/api';

var _token = '';
if (typeof window !== 'undefined')
  _token = sessionStorage.getItem('rms_token')

app.get = async (url, callback = function () { }) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + _token,
    }
  }
  var data = {};

  await axios.get(`${apiUrl}${url}`, config)
    .then(res => {

      data = res.data;
      console.log(data)

      callback(null, data)

    }).catch(err => {
      callback(err)
      data = err;
    });

  return data;
}

app.post = async (url, body, callback = function () { }) => {
  // console.log("Token: ",_token )
  let config = {
    headers: {
      Authorization: 'Bearer ' + _token,
    }
  }

  var data = {};
  await axios.post(`${apiUrl}${url}`, body, config)
    .then(res => {
      data = res.data;
      console.log(data)
      callback(null, data)
    }).catch(err => {
      callback(err)
      data = err;
    });

  return data;
}

app.put = async (url, body, callback = function () { }) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + _token,
    }
  }

  var data = {};
  await axios.put(`${apiUrl}${url}`, body, config)
    .then(res => {
      data = res.data;
      console.log(data)
      callback(null, data)
    }).catch(err => {
      callback(err)
      data = err;
    });

  return data;
}

app.delete = async (url, body, callback = function () { }) => {
  let headers = {
    Authorization: 'Bearer ' + _token,
  }


  var data = {};
  await axios.delete(`${apiUrl}${url}`, { data: body, headers })
    .then(res => {
      data = res.data;
      console.log(data)
      callback(null, data)
    }).catch(err => {
      callback(err)
      data = err;
    });

  return data;
}

global.app = app;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

>>>>>>> 49577ff713283aab6b1b9093016b4cd92a3b344c
