import React from 'react';

function Images({ place }) {
  return (
    <div className="body">
      <div className='Container'>
        {place.photos.map((image, index) => {
          let className = '';
          switch (index) {
            case 0:
              className = 'house';
              break;
            case 1:
              className = 'interior';
              break;
            case 2:
              className = 'living-room';
              break;
            case 3:
              className = 'kitchen';
              break;
            case 4:
              className = 'bathroom';
              break;
            default:
              className = '';
          }
          return (
            <img 
              key={index}
              src={'http://localhost:4000/upload/' + image}
              alt={className}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Images;
