export default function Button({
  theme,
  onClick,
}: {
  theme: string;
  onClick: () => void;
}) {
  return (
    <button style={{ marginLeft: '10px' }} className={theme} onClick={onClick}>
      Click Me
    </button>
  );
}
