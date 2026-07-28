export default function MoonBullet({ size = 14 }: { size?: number }) {
  return (
    <div style={{
      flexShrink: 0,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'transparent',
      boxShadow: `inset ${Math.round(size * 0.35)}px -2px 0 0 #FF66C4`,
      marginTop: size === 14 ? 3 : 0,
    }} />
  );
}
