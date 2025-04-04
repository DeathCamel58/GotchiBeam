import { useState } from 'react';
import { useNfcReader } from '@/contexts/NfcReaderContext';
import ConnectDisconnectButton from '@/components/ConnectDisconnectButton'; // Import ConnectDisconnectButton

export default function ReaderStatus() {
  const { status, logs } = useNfcReader();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

  let circleColor = 'bg-gray-400'; // Default color (when unknown or loading)

  if (status === 'connected') {
    circleColor = 'bg-green-500'; // Green for connected
  } else if (status === 'disconnected') {
    circleColor = 'bg-orange-500'; // Orange for disconnected
  } else if (status === 'error') {
    circleColor = 'bg-red-500'; // Red for error
  }

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      {/* Status Circle */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div
          className={`w-4 h-4 rounded-full ${circleColor}`}
          title={`Reader is ${status}`}
        />
        <span className="text-sm text-gray-300">{status}</span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 p-4">
          {/* Connect/Disconnect Button */}
          <ConnectDisconnectButton />

          {/* Log History */}
          <div className="mt-4">
            <h3 className="text-sm font-bold">Last 5 Logs:</h3>
            <ul className="text-xs">
              {logs.length === 0
                ? 'No logs yet.'
                : logs.map((log, index) => (
                    <li key={index} className="py-1">
                      {log}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
