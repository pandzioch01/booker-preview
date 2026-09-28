import Image from "next/image";

type StarburstProps = {
  size?: number;
  className?: string;
};

/** Własny wektor zamiast znaku Unicode renderowanego przez system jako emoji. */
export function Starburst({ size = 24, className }: StarburstProps) {
  return <Image src="/starburst.svg" width={size} height={size} alt="" aria-hidden="true" className={className} />;
}
