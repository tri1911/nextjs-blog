import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Fn, ItemData } from "./types";

export function useDetectOnScreen(
  ref: React.RefObject<HTMLElement>,
  onScreenHandler: Fn<[], void>,
  offScreenHandler: Fn<[], void>
) {
  useEffect(() => {
    // initialize observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? onScreenHandler() : offScreenHandler();
      },
      { threshold: [1] }
    );

    // subscribe
    ref.current && observer.observe(ref.current);

    return () => {
      // unsubscribe
      ref.current && observer.unobserve(ref.current);
    };
  }, [onScreenHandler, offScreenHandler]);
}

export function useInfiniteScrolling() {
  const [state, setState] = useState({
    items: Array<ItemData>(),
    isLoading: false,
    page: 1,
  });

  const detectBoxRef = useRef<HTMLDivElement>(null);

  useDetectOnScreen(
    detectBoxRef,
    () => {
      console.log("detectBox is fully on screen");
      // console.log("onScreenHandler is called");
      loadItems();
    },
    () => {
      console.log("detectBox is off screen");
    }
  );

  const loadItems = async () => {
    // set isLoading to true
    setState((state) => ({ ...state, isLoading: true }));
    // fetch data through `/api/items/{page}`
    const { data } = await axios.get(`/api/items?page=${state.page}`);
    // waiting simulation
    await new Promise((r) => setTimeout(r, 1000));
    // concatenate returned items to previous items
    // set isLoading back to false
    // update the current page as well
    setState((state) => ({
      items: [...state.items, ...data.items],
      isLoading: false,
      page: state.page + 1,
    }));
  };

  return {
    state,
    detectBoxRef,
  };
}
