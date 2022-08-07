import { useState } from "react";
export const getComments = async (text) => {
  return [
    {
      id: "1",
      body: 'Wait for a reply',
      username: "Admin",
      userId: "1",
      parentId: null,
      createdAt: "2022-08-02T23:00:33.010+02:00",
    },
   
  ];
};

const v={
comment:'',
post_id:'',
user_id:''


}




  // const {name,value}=event.tr

export const CreateComment = async (text, parentId = null) => {



  const response =await fetch('http://localhost:8000/api/comments', {
  method: 'POST',
  headers: {
  ContentType: 'application/json',
  },
  body: JSON.stringify({  comment:text,post_id:1,user_id:1 }),
  })
  
  if(response.ok){
    alert('Replay Added Successfully');
   }else{
    alert('There is something wrong');
   }
  

  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Admin",
    createdAt: new Date().toISOString(),
  };
};

// };

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
