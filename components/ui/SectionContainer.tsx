export default function SectionContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) clamp(20px, 4vw, 48px)',
      }}
    >
      {children}
    </div>
  );
}
