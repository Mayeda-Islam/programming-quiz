import React from 'react';

const Option = ({options ,handleRightAnswer,id}) => {
   
    return (
        <div >
            <button onClick={()=>handleRightAnswer(options,id)} className='border py-2  px-3 border-2 rounded-3'>{options}</button>
        </div>
    );
};

export default Option;<p>this is option</p>