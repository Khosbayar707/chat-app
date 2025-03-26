import ConverstaionFallback from "@/components/shared/conversation/ConverstaionFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

type Props = {};

const FriendsPage = (props: Props) => {
  return (
    <div>
      <ItemList title="Friends">Friends Page</ItemList>
      <ConverstaionFallback />
    </div>
  );
};
export default FriendsPage;
