/* eslint-disable @typescript-eslint/no-explicit-any */
import { startGame } from "@/api/game/game";
import { toast } from "@/components/UI/Toast/toast";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRequest } from "ahooks";
import { forwardRef, useImperativeHandle } from "react";
import ButtonPurchase from "./ButtonPurchase/ButtonPurchase";
import ButtonBackToHome from "../ButtonBackToHome/ButtonBackToHome";
import { formatNumberDot } from "@/utils/fc.utils";

const ModalEndGame = (_: any, ref: any) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const { run, loading } = useRequest(startGame, {
    manual: true,
    onSuccess() {
      // todo
    },
    onError() {
      toast.error("Purchased failed");
    },
  });

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        onOpen();
      },
      onClose: () => onClose(),
    };
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        placement={"center"}
        onOpenChange={onOpenChange}
        isDismissable
        onClose={onClose}
        hideCloseButton
        classNames={{
          base: "m-0   !p-0",
        }}
        className="!m-0 !mx-4 !p-[6px] bg-[#516074] rounded-[10px] border-1 border-solid border-black"
      >
        <ModalContent className="">
          {() => (
            <div className="bg-linear border-[2px] border-solid border-[#728ea2] rounded-xl">
              <div className="w-full flex justify-center">
                <img
                  src="/global/hero-hams.png"
                  className="w-[179px] h-[42px]"
                />
              </div>
              <ModalHeader className="flex flex-col gap-1 items-center justify-center p-0 pt-6 pb-4">
                <img
                  src={"/home/hamster-mini.png"}
                  className="w-[169px] h-[160px]"
                />
              </ModalHeader>
              <ModalBody className="gap-3 pb-6">
                <p className="line-clamp-1 text-white stroke-0-7 text-custom-xl-bold text-center">
                  Reward
                </p>
                <div className="flex items-center gap-[2px] flex-1 justify-center">
                  <img src="/currency/coin.png" className="w-10 h-10" />
                  <p className="line-clamp-1 text-white stroke-1 text-custom-4xl-bold">
                    {formatNumberDot(500)}
                  </p>
                </div>
                <ButtonPurchase
                  title="PLAY AGAIN"
                  loading={loading}
                  onClick={run}
                />
                <ButtonBackToHome />
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default forwardRef(ModalEndGame);
