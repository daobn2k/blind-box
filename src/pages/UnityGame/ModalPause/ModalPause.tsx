/* eslint-disable @typescript-eslint/no-explicit-any */
import { startGame } from "@/api/game/game";
import { toast } from "@/components/UI/Toast/toast";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useRequest } from "ahooks";
import { forwardRef, useImperativeHandle } from "react";
import ButtonBackToHome from "../ButtonBackToHome/ButtonBackToHome";
import ButtonPurchase from "../ModalEndGame/ButtonPurchase/ButtonPurchase";

const ModalPause = (_: any, ref: any) => {
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
          base: "m-0 !p-0",
        }}
        className="!m-0 !mx-4 !p-[6px] bg-[#516074] rounded-[10px] border-1 border-solid border-black"
      >
        <ModalContent className="">
          {() => (
            <div className="bg-linear border-[2px] border-solid border-[#728ea2] rounded-xl">
              <div className="w-full flex justify-center">
                <img src="/global/pause.png" className="w-[179px] h-[42px]" />
              </div>
              <ModalBody className="gap-3 p-6">
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

export default forwardRef(ModalPause);
