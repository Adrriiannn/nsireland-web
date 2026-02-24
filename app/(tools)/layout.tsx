import TopNav from "@/components/layout/TopNav";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
}