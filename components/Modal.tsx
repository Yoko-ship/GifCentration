"use client";
import React, { Dispatch, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";
import { useActionState } from "react";
import { getGifs } from "@/lib/hanlder";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/story/hooks";
import { addContent } from "@/story/gifStory";
import { useAppSelect } from "@/story/hooks";
import { openHanlder } from "@/story/gifStory";

const Modal = () => {
  const [isStarted, setIsStarted] = useState(false);
  const router = useRouter();
  const isOpen = useAppSelect((state) => state.gifReducer.isOpen);


  useEffect(() => {
    setIsStarted(true);
  }, []);

  const [data, formAction, isPending] = useActionState(getGifs, null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.length >= 1) {
      dispatch(openHanlder(false));
      dispatch(addContent(data));
      router.push("/gifs");
    }
  }, [data]);
  if (!isStarted) return null;
  return createPortal(
    <>
      <dialog open={isOpen} className={classes.dialog}>
        <form action={formAction}>
          <div className={classes.menu}>
            <button onClick={() => dispatch(openHanlder(false))}>✖</button>
          </div>
          <section className={classes.content}>
            <h1>Search for GIFs</h1>
            <input
              type="text"
              placeholder="Enter your query here..."
              name="search"
            />
            <h2>Popular Searches</h2>
            <div className={classes.btns}>
              <button>test</button>
              <button>test</button>
            </div>
            <button className={classes.confirm}>Go!</button>
          </section>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
