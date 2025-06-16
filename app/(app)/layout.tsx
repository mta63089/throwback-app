import SiteHeader from "@/components/site-header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <div className="w-full h-full flex flex-1">{children}</div>
    </>
  );
}
