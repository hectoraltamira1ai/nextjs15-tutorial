export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h2>Featured products section additions</h2>
        <h3>Product details comming soon!</h3>
      </div>
    </div>
  );
}
