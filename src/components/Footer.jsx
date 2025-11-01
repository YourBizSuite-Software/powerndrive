export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-6 text-sm text-gray-600 flex justify-between flex-wrap gap-3">
        <p>© {new Date().getFullYear()} PowerNDrive Motors</p>
        <p>Developed by YourBizSuite</p>
      </div>
    </footer>
  );
}