import React, { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "../types";
import { modalContent } from "../content-modale";
import AnimatedIcon from "../components/AnimatedIcon";
import { placeholderIcon, socialMediaIcon } from "../assets/icons";
import dataIcon from "../assets/data-icon.json";
import eCommerceIcon from "../assets/e-commerce.json";
import advertisingIcon from "../assets/advertising-icon.json";
import { Player } from "@lordicon/react";

interface ModalContentProps {
  selectedProject: Project;
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  selectedProject,
  closeModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);
  const [resizeSide, setResizeSide] = useState<"left" | "right" | null>(null);

  const playerRefs = useRef<(Player | null)[]>([]);

  const iconMap: { [key: string]: React.ReactElement } = {
    SocialMediaIcon: (
      <AnimatedIcon
        icon={socialMediaIcon}
        ref={(ref) => (playerRefs.current[0] = ref)}
      />
    ),
    AdvertisingIcon: (
      <AnimatedIcon
        icon={advertisingIcon}
        ref={(ref) => (playerRefs.current[1] = ref)}
      />
    ),
    ShoppingCart: (
      <AnimatedIcon
        icon={eCommerceIcon}
        ref={(ref) => (playerRefs.current[2] = ref)}
      />
    ),
    LineChart: (
      <AnimatedIcon
        icon={dataIcon}
        ref={(ref) => (playerRefs.current[3] = ref)}
      />
    ),
    Megaphone: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[4] = ref)}
      />
    ),
    Calendar: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[5] = ref)}
      />
    ),
    MapPin: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[6] = ref)}
      />
    ),
    FileText: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[7] = ref)}
      />
    ),
    Users: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[8] = ref)}
      />
    ),
    Code: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[9] = ref)}
      />
    ),
    Heart: (
      <AnimatedIcon
        icon={placeholderIcon}
        ref={(ref) => (playerRefs.current[10] = ref)}
      />
    ),
  };

  const getChannelClass = (channel: string) => {
    switch (channel.toLowerCase()) {
      case "facebook":
        return "channel-facebook";
      case "instagram":
        return "channel-instagram";
      case "shopify":
        return "channel-shopify";
      case "google ads":
        return "channel-google-ads";
      default:
        return "bg-gray-100";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const startResizing = (e: React.MouseEvent, side: "left" | "right") => {
    setIsResizing(true);
    setResizeSide(side);
    setStartX(e.clientX);
    if (modalRef.current) {
      setStartWidth(modalRef.current.offsetWidth);
    }
    document.body.style.userSelect = "none";
  };

  const resize = (e: MouseEvent) => {
    if (isResizing && modalRef.current) {
      const deltaX = e.clientX - startX;
      let newWidth = startWidth;

      if (resizeSide === "left") {
        newWidth = startWidth - deltaX;
      } else if (resizeSide === "right") {
        newWidth = startWidth + deltaX;
      }

      const minWidth = 400;
      const maxWidth = 1200;
      const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);

      modalRef.current.style.width = `${clampedWidth}px`;
    }
  };

  const stopResizing = () => {
    setIsResizing(false);
    setResizeSide(null);
    document.body.style.userSelect = "auto";
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    } else {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    }

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing]);

  const projectModalContent = modalContent[selectedProject.id];

  return (
    <div className="modal-overlay">
      <div
        ref={modalRef}
        className="modal-content"
        style={{
          width: "600px",
          minWidth: "400px",
          maxWidth: "1200px",
          position: "absolute",
          resize: "none",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="sticky top-0 right-0 w-full flex justify-end z-20">
          <button onClick={closeModal} className="modal-close-button">
            <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        <div
          className="resize-handle left"
          onMouseDown={(e) => startResizing(e, "left")}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "5px",
            cursor: "ew-resize",
          }}
        />
        <div
          className="resize-handle right"
          onMouseDown={(e) => startResizing(e, "right")}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "5px",
            cursor: "ew-resize",
          }}
        />

        {/* Aggiunta della sezione logo, nome azienda e periodo di collaborazione */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={selectedProject.modalImage}
            alt="Company Logo"
            className="company-logo-modale"
          />
          <div>
            <h3 className="text-xl font-bold">{selectedProject.companyName}</h3>
            <p className="text-gray-600">
              {selectedProject.collaborationPeriod}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-lg">{selectedProject.overview.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-2xl font-bold">Obiettivi:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {selectedProject.overview.objectives.map(
                  (obj: string, i: number) => (
                    <li key={i}>{obj}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Canali:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.overview.channels.map(
                  (channel: string, i: number) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full ${getChannelClass(channel)}`}
                    >
                      {channel}
                    </span>
                  )
                )}
              </div>
              <p className="mt-4">
                <span className="text-2xl font-bold">Budget: </span>
                {selectedProject.overview.ruoli}
              </p>
            </div>
          </div>
        </div>

        {projectModalContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {projectModalContent.columns.map((column, index) => (
              <div
                key={index}
                onMouseEnter={() => playerRefs.current[index]?.play()}
                onMouseLeave={() => playerRefs.current[index]?.goToFrame(0)}
              >
                <h2 className="text-2xl font-bold flex items-center">
                  {iconMap[column.icon]}
                  {column.title}
                </h2>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: column.content }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
