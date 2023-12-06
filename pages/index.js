import React from "react";
import Router from "next/router";
import Image from "next/image";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  } 

  render() {
    const { home_data, theme_data, loading } = this.state;
    console.log("theme_data:", this.state.theme_data);

    return (
    <>
      <div className="" >
        <div className="bg-section bg-background mx-auto m-0" >
          <div className="row">
            <div className="col-lg-12">
              <div className="cardLogo radius bg-cardBackground"  >
                <div className="card-body">
                  <p>Hello Dane</p>                  
                </div>
              </div>
            </div>
          </div>    
        </div>     
      </div>
      </>
    );
  }
}
