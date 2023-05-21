import React from "react";

interface Props {
  undo: () => void;
  redo: () => void;
}

const UndoRedoButtons: React.FC<Props> = ({ undo, redo }) => {
  return (
    <>
      <div className='button-wrapper'>
        <button className='button' onClick={undo}>
          Undo
        </button>
        <button className='button' onClick={redo}>
          Redo
        </button>
      </div>
    </>
  );
}

export default UndoRedoButtons;
