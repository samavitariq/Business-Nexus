export default function EntrepreneurDashboard({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8">Business Nexus</h2>
        <nav className="space-y-4">
          <a href="/dashboard/investor" className="block text-gray-700 hover:text-blue-600">
            Investor Dashboard
          </a>
          <a href="/dashboard/entrepreneur" className="block text-gray-700 hover:text-blue-600">
            Entrepreneur Dashboard
          </a>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-10">{children}</main>
    </div>
  );
}
