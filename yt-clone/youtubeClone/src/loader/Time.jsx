import React from 'react';
import moment from 'moment';

function Time({ time }) {
  // Ensure time is a valid number of seconds; default to 0 if not provided
  const videoTime = moment().startOf("day").seconds(time || 0).format("H:mm:ss"); 

  return (
    <div className='absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md'>{videoTime}</div>
  );
}

export default Time;
