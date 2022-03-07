import React, { useRef, useState, useEffect } from "react";
import CardItem from "../../components/infinite-scroll/CardItem";
import useDetectOnScreen from "../../components/infinite-scroll/hook";
import { ItemData } from "../../components/infinite-scroll/types";
import axios from "axios";
import LoadingItem from "../../components/infinite-scroll/LoadingItem";

const defaultState: { items: ItemData[]; isLoading: boolean; page: number } = {
  items: [],
  isLoading: false,
  page: 1,
};

const InfiniteScrollingPage = () => {
  const [state, setState] = useState(defaultState);

  const detectBoxRef = useRef<HTMLDivElement>(null);

  useDetectOnScreen(
    detectBoxRef,
    () => {
      console.log(`detectBox is fully on screen`);
      console.log("onScreenHandler is Called");
      loadItems();
    },
    () => {
      console.log(`detectBox is off screen`);
    }
  );

  const loadItems = async () => {
    // set isLoading to true
    setState((state) => ({ ...state, isLoading: true }));
    // fetch data through `/api/items`
    const { data } = await axios.get(`/api/items?page=${state.page}`);
    // waiting simulation
    await new Promise((r) => setTimeout(r, 1000));

    // concatenate returned items to items
    // set isLoading back to false
    // update the current page as well
    setState((state) => ({
      items: [...state.items, ...data.items],
      isLoading: false,
      page: state.page + 1,
    }));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">
        Infinite Scrolling Page
      </h1>
      <div className="mx-auto w-1/3">
        {state.items.map((item) => (
          <div key={item.id} className="mb-1">
            <CardItem {...item} />
          </div>
        ))}
        {!state.isLoading ? (
          <div ref={detectBoxRef} className="h-9" />
        ) : (
          <LoadingItem />
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollingPage;
