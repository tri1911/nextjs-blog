import React from "react";
import CardItem from "../../components/infinite-scroll/CardItem";
import LoadingItem from "../../components/infinite-scroll/LoadingItem";
import { useInfiniteScrolling } from "../../components/infinite-scroll/hook";

const InfiniteScrollingPage = () => {
  const { state, detectBoxRef } = useInfiniteScrolling();

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-5">
        Infinite Scrolling Page
      </h1>
      <section className="mx-auto w-1/3">
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
      </section>
    </>
  );
};

export default InfiniteScrollingPage;
