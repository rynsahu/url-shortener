import { Button } from "@/components/ui/button";
import { ContainerSize } from "./type";
import React from "react";

interface PrivatePageContainerProps {
  heading: string;
  subHeading?: string;
  children: React.ReactNode;
  actionBtn?: {
    label: string;
    onActionBtnClick?: () => void;
  };
  size?: ContainerSize;
}

const CONTAINER_SIZE_CLASS: Record<ContainerSize, string> = {
  md: 'max-w-[768px] mx-auto',
  lg: 'max-w-[1024px] mx-auto',
  xl: 'max-w-[1280px] mx-auto',
}

const PrivatePageContainer: React.FC<PrivatePageContainerProps> = ({ children, heading, subHeading, actionBtn, size = 'xl' }) => {
  const containerSizeClass = CONTAINER_SIZE_CLASS[size];
  
  return (
    <div className={`flex flex-col gap-6 px-4 w-full ${containerSizeClass} my-7`}>
      <section className="flex flex-col gap-2">
        <div className="flex gap-3 justify-between items-center">
          <h1 className="text-3xl font-bold">{heading}</h1>
          {actionBtn && (
            <Button onClick={actionBtn?.onActionBtnClick}>
              {actionBtn.label}
            </Button>
          )}
        </div>
        {subHeading && <p className="text-sm text-zinc-600">{subHeading}</p>}
      </section>
      <section className="flex flex-col">
        {children}
      </section>
    </div>
  );
}

export default React.memo(PrivatePageContainer);