"use client";
import React, { useEffect, useState } from "react";
import { useAppSelect } from "@/story/hooks";
import classes from "./gifs.module.css";
import Image from "next/image";
const Gifs = () => {
  const data = useAppSelect((state) => state.gifReducer.item)[0];
  const [activeId, setActiveId] = useState<string[]>([]);
  const [cloneData,setCloneData] = useState([])
  const openHanlder = (id: string) => {
    setActiveId((prevArray) =>{
      if(prevArray.includes(id)) return prevArray

      const updated = [...prevArray,id]
      return updated.length > 2 ? updated.slice(1):updated
    })
  };
  
  useEffect(() =>{
    if(data){
      const fullData = Array.from({length:10},(_,i) =>{
        const original = data[i % data.length];
        return{
          ...original,
          id:`${original.id}-${i}`
        }
      }) 
      const shuffled = [...fullData].sort(() => Math.random() - 0.5)
      setCloneData(shuffled)
    }
  },[data])

  console.log(cloneData)
  return (
    <>
      <main className={classes.main}>
        <div className={classes.grids}>
          {cloneData?.map((item) => (
            <div className={classes.grid} onClick={() => openHanlder(item.id)}>
              {activeId.includes(item.id) ? (
                <img src={item.images.original.url} alt="gif" />
              ) : (
                <Image
                  src={"/icons8-question-mark-50.png"}
                  alt="question mark"
                  width={50}
                  height={50}
                  className={classes.questionMark}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Gifs;
