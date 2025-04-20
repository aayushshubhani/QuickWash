import { useState } from "react";

function ReviewComplaints({ complaints }) {
  const [updatedComplaints, setUpdatedComplaints] = useState(complaints);

  const handleStatusUpdate = (id) => {
    setUpdatedComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: "Resolved" } : complaint
      )
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-700 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-900">Review Complaints</h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-6 py-3 border-b">Customer Name</th>
                <th className="px-6 py-3 border-b">Complaint</th>
                <th className="px-6 py-3 border-b">Status</th>
                <th className="px-6 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {updatedComplaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-indigo-100">
                  <td className="px-6 py-4 border-b text-gray-800">{complaint.customerName}</td>
                  <td className="px-6 py-4 border-b text-gray-800">{complaint.complaint}</td>
                  <td className="px-6 py-4 border-b text-gray-800">{complaint.status}</td>
                  <td className="px-6 py-4 border-b">
                    {complaint.status === "Resolved" ? (
                      <span className="bg-green-500 text-white py-1 px-4 rounded-lg">Resolved</span>
                    ) : (
                      <button
                        onClick={() => handleStatusUpdate(complaint.id)}
                        className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded-lg transition duration-300"
                      >
                        Mark as Resolved
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReviewComplaints;
