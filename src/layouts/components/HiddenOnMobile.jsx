export default function HiddenOnMobile({ children }) {
  return <div className="hidden sm:block">{children}</div>;
}
