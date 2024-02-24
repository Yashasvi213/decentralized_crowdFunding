const GradientWrapper = ({ children, ...props }) => (
  <div
    {...props}
    className={`relative overflow-hidden border-t  ${props.className || ""}`}
  >
    <div
      className="blur-[100px] absolute inset-0 w-full h-full"
      style={{
        background:
          "linear-gradient(182deg, rgba(237, 78, 80, 0.08) 14.76%, rgba(152, 103, 240, 0.2) 24.37%, rgba(152, 103, 240, 0) 56.62%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
