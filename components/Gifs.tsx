"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelect } from "@/story/hooks";
import classes from "./gifs.module.css";
import Image from "next/image";

type Selected = {
  id: string;
  title: string;
};

const Gifs = () => {
  const data = useAppSelect((state) => state.gifReducer.item)[0];
  const [activeId, setActiveId] = useState<string[]>([]);
  const [cloneData, setCloneData] = useState([]);
  const [selected, setSelected] = useState<Selected[]>([]);
  const [matchedId,setMatchedId] = useState<string[]>([])
  
  const openHanlder = useCallback((id:string,title:string) =>{
    if(activeId.includes(id) || matchedId.includes(id)) return;
    setSelected((prev) => [...prev,{id,title}]) 
    setActiveId((prev) => [...prev,id])   
  },[activeId,matchedId]) 

  useEffect(() => {
    if (selected.length === 2) {
      const [first,second] = selected
      if (first.title === second.title){
        console.log("match");
        setMatchedId((prev) => [...prev,first.id,second.id])
        setSelected([])
        setActiveId([])
      } else {
        console.log("Not a match");
        const timeOut = setTimeout(() => {
          setSelected([])
          setActiveId([])
        }, 500);
        return () => clearTimeout(timeOut);
      }
    }
  }, [selected]);

  useEffect(() => {
    if (data) {
      const fullData = Array.from({ length: 10 }, (_, i) => {
        const original = data[i % data.length];
        return {
          ...original,
          id: `${original.id}-${i}`,
        };
      });
      const shuffled = [...fullData].sort(() => Math.random() - 0.5);
      setCloneData(shuffled);
    }
  }, [data]);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.grids}>
          {cloneData?.map((item) => (
            <div
              className={classes.grid}
              onClick={() => openHanlder(item.id, item.title)}
              key={item.id}
            >
              {activeId.includes(item.id) || matchedId.includes(item.id) ? (
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
