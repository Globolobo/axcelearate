declare module "react-input-autosize" {
  import { ComponentType, RefObject } from "react";

  interface AutosizeInputProps {
    autoComplete?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    style?: React.CSSProperties;
    ref?: RefObject<AutosizeInput>;
    className?: string;
  }

  const AutosizeInput: ComponentType<AutosizeInputProps>;
  export default AutosizeInput;
}
