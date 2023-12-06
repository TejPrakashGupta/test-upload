import React from 'react';
import '../styles/globals.css'


import axios from 'axios';

const app = {};

app.baseURL = 'http://rms.softreader.in:5000/api'


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
    await axios.get(`${app.baseURL}${url}`,config)
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
    await axios.post(`${app.baseURL}${url}`,body,config)
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
    await axios.put(`${app.baseURL}${url}`,body,config)
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
    await axios.delete(`${app.baseURL}${url}`, {data:body, headers})
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

