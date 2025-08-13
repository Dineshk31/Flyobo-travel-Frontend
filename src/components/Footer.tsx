export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
      </div>
    </footer>
  );
}
