import React from 'react'
import './Droppable.css';

const Droppable = () => {
  const dragOver = (element) => {
      element.preventDefault();
  }

  const dragEnter = (element) => {
      element.preventDefault();
  }

  const dragLeave = (element) => {
      element.preventDefault();
  }

  const drop = (element) => {
      element.preventDefault();
      let files = element.dataTransfer.files;
      if(files != 0){
        files = immageFilter(files);


      }
      console.log(files);
  }

  const immageFilter = (files) => {
  const immageTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  //TODO workes with one file. expand with a for files.length
  if(immageTypes.indexOf(files[0].type) === -1){
    return [];
  }

    return files;
  }



  return (
    <div className="wrapper">
      <div className="dropHere"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={drop}
      >
        Drop Here :)
      </div>

    </div>

  )
}

export default Droppable;
