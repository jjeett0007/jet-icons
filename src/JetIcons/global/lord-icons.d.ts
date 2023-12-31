type LordIconTriggers =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";


type LordIconPropss = {
  src?: string;
  trigger?: LordIconTriggers;
  colors?: string;
  delay?: string | number;
};

type LordIconElements = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordIconPropss;

// lord-icon.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    "lord-icon": {
      src: string;
      trigger: string;
      colors: string;
      state: string;
      delay: string | number;
      style: React.CSSProperties;
    };
  }
}
