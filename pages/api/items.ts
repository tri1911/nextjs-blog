import { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";
import { ItemData } from "../../components/infinite-scroll/types";

const PAGE_SIZE = 10;
let currentId = 0;

export default async function itemsHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const items = [...Array(PAGE_SIZE)].map((_) => {
    return {
      id: currentId++,
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
  });
  response.status(200).json({ items, page: request.query.page });
}
