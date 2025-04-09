import React, { useState } from "react";
import defaultContactImageSrc from "./assets/default-contact-thumbnail.png";
import { Text } from "@radix-ui/themes";
import "./contact-field.scss";

export interface ContactFieldProps {
  imageSrc?: string;
  imageClassName?: string;
  name: string;
  email?: string;
  showEmail?: boolean;
  enabled?: boolean;
}

function ContactImage(imageSrc?: string) {
  const src = imageSrc ? imageSrc : defaultContactImageSrc;

  return (
    <img src={src} className="contact-thumbnail" alt="Contact thumbnail" />
  );
}

export const ContactField = ({
  imageSrc,
  imageClassName,
  name,
  email,
  showEmail = false,
  enabled = false,
}: ContactFieldProps) => {
  const contactImage = ContactImage(imageSrc);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`contact-field-container ${isActive ? "active" : ""} ${
        isHovered ? "hovered" : ""
      } ${enabled && !email ? "enabled-no-email" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <div className={`contact-image-container ${imageClassName || ""}`}>
        {contactImage}
      </div>
      <div className="contact-details">
        <Text
          weight="medium"
          as="div"
          className={`contact-name ${
            enabled && !email ? "enabled-no-email" : ""
          }`}
          align="left"
        >
          {name}
        </Text>
        {showEmail && email && <Text className="contact-email">{email}</Text>}
      </div>
    </div>
  );
};
