import TopNav from "@/components/layout/TopNav";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { getServerMe } from "@/lib/auth/server-session";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getServerMe();

  return (
    <AuthProvider initialMe={me}>
      <TopNav />
      {children}
    </AuthProvider>
  );
}