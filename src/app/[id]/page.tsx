import Test from "@/shared/test";

export default async function Page(params: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params.params;

  return (
    <div>
      <Test />
      <div> Page {id}</div>
    </div>
  );
}
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
