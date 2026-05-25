import Image from "next/image";

type LinkedInLogoProps = {
  className?: string;
  variant?: "bug" | "wordmark";
};

const linkedinLogos = {
  bug: {
    height: 540,
    sizes: "44px",
    src: "/images/logos/LI-In-Bug.png",
    width: 635
  },
  wordmark: {
    height: 540,
    sizes: "96px",
    src: "/images/logos/linkedin-logo.png",
    width: 2212
  }
};

export function LinkedInLogo({ className, variant = "wordmark" }: LinkedInLogoProps) {
  const logo = linkedinLogos[variant];

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={logo.height}
      loading="eager"
      sizes={logo.sizes}
      src={logo.src}
      unoptimized
      width={logo.width}
    />
  );
}
