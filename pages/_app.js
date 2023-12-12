import React from 'react';
import '../styles/globals.css'


import axios from 'axios';
import config from '../config';
import getConfig from 'next/config';
const app = {};
const { publicRuntimeConfig } = getConfig();
// const apiUrl = publicRuntimeConfig.apiUrl;
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://staging.flowerwale.com';


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

