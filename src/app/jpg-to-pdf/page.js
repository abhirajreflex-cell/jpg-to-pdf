import JpgToPdfTool from "@/components/tools/JpgToPdfTool"

export const metadata = {
  title: "JPG to PDF Online Free",
  description: "JPG images ko PDF mein convert karo. Free, fast, aur files upload nahi hoti.",
  keywords: ["jpg to pdf", "jpg to pdf online free", "image to pdf"],
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-3xl font-bold">JPG to PDF Online Free</h1>
      <p className="mb-6 text-gray-600">Apni JPG images select karo aur ek PDF download karo.</p>
      <JpgToPdfTool />
    </section>
  );
}