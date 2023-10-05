import { LordIcon } from "../IconComponent/jet";

type YourIconProps = {
  size?: number;
  colors?: { primary?: string; secondary?: string };
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "morph-two-way";
  delay?: number;
};

const YourIcon: React.FC<YourIconProps> = ({
  size = 24,
  colors = {},
  trigger = "hover",
  delay = 0,
}) => {
  return (
    <LordIcon
      src="/assets/wired-outline-2030-frysztak-town.json"
      size={size}
      colors={colors}
      trigger={trigger}
      delay={delay}
    />
  );
};

export default YourIcon;
