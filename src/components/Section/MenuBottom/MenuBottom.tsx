import { ROUTE_PATH } from "@/router/route-path";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function MenuBottom() {
  const navigate = useNavigate();
  const menus = [
    {
      icon: "/menu/quests.png",
      href: ROUTE_PATH.QUESTS,
    },
    {
      icon: "/menu/shop.png",
      href: ROUTE_PATH.BOOST,
    },
    {
      icon: "/menu/friends.png",
      href: ROUTE_PATH.FRIENDS,
    },
    {
      icon: "/menu/rank.png",
      href: ROUTE_PATH.RANK,
    },
    // {
    //   icon: "/menu/air-drop.png",
    //   href: ROUTE_PATH.AIRDROP,
    // },
  ];

  return (
    <div className=" grid grid-cols-4 gap-3 pb-[32px] px-4">
      {menus.map((m) => {
        return (
          <ItemMenu {...m} key={m.icon} onClick={() => navigate(m.href)} />
        );
      })}
    </div>
  );
}

const ItemMenu = ({
  onClick,
  icon,
}: {
  icon: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-[6px] items-center justify-center"
        // {
        //   ["active-menu"]: isActive,
        // }
      )}
      onClick={onClick}
    >
      <img src={icon} />
      {/* <p
        className={clsx("text-custom-xs-bold text-[#7F8EB3]", {
          ["!text-white"]: isActive,
        })}
      >
        {title}
      </p> */}
    </div>
  );
};
