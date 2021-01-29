import React from 'react'

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
      const files = element.dataTransfer.files;
      console.log(files);
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
