"use client";
import React from "react";
import classes from "@/app/page.module.css";
import Image from "next/image";
import { useAppDispatch } from "@/story/hooks";
import { openHanlder } from "@/story/gifStory";
import { useAppSelect } from "@/story/hooks";

function Header() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelect((state) => state.gifReducer.isOpen);
  return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <button onClick={() => dispatch(openHanlder(true))}>
                <Image
                  src={"/icons8-search-32.png"}
                  alt="start-btn"
                  width={32}
                  height={32}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  src={"/icons8-reboot-32.png"}
                  alt="reload-btn"
                  width={32}
                  height={32}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      
  );
}

export default Header;
