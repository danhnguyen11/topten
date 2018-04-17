import React, { Component } from 'react';

const Entry_List = ({entries,onEntryClick}) =>{
  return (
    <div>
      {entries.map((entry) => {
          return(
            <li className="list-group-item" onClick={() => onEntryClick(entry)} key={entry.Title}>
              {entry.Title}
            </li>
          )
        })
      }
    </div>
  );

}

export default Entry_List;
