import React, { Component } from 'react';

const Entry_Detail = (props) => {
  if(!props.selectedEntry || !props.selectedEntry.Keywords){
    return (
      <div>
        Please Select an issue || Issue is pending
      </div>
    )
  } else {
    return (
      <div>
        <p>Keyword</p>
          <ul>
          {props.selectedEntry.Keywords.map((keyword)=>{
            return (
              <li key={keyword}>
                {keyword}
              </li>
            )
          })
          }
          </ul>
        <p>Errors</p>
          <ul>
            {props.selectedEntry.Cases.map((cas) => {
              return (
                <div>
                  <input className="error-checkbox" type="checkbox" key={cas.Error} name={cas.Error} />
                  {cas.Error}
                </div>
                
              )
            })
            }
          </ul>
        <p>Troubleshooting Approaches</p>
          <ul>
            {props.selectedEntry.Cases.map((cas) => {
              return (
                <li key={cas.ToDos}>
                  {cas.ToDos.join(' || ')}
                </li>
              )
            })
            }
          </ul>
      </div>
    )
  }
}

export default Entry_Detail;
