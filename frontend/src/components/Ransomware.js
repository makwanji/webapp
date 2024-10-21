import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

function RansomwareTable() {
  const [ransomware, setransomware] = useState([]);

  useEffect(() => {
    const fetchransomware = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('accessToken');


        // Add the token to the Authorization header
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/ransomware/getransomware`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setransomware(response.data);
      } catch (error) {
        console.error('Error fetching ransomware:', error);
      }
    };

    fetchransomware();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Ransomware Information</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Extensions</th>
            <th className="py-2">RansomNoteFilenames</th>
            <th className="py-2">encryptionAlgorithm</th>
            <th className="py-2">microsoftDetectionName</th>
            <th className="py-2">iocs</th>

          </tr>
        </thead>
        <tbody>
          {ransomware.map((ransomware) => (
            <tr key={ransomware.id}>
              <td className="border px-4 py-2">{ransomware.name}</td>
              <td className="border px-4 py-2">{ransomware.extensions}</td>
              <td className="border px-4 py-2">${ransomware.ransomNoteFilenames}</td>
              <td className="border px-4 py-2">${ransomware.encryptionAlgorithm}</td>
              <td className="border px-4 py-2">${ransomware.microsoftDetectionName}</td>
              <td className="border px-4 py-2">${ransomware.iocs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RansomwareTable;
