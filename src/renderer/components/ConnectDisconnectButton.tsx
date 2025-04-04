import { useNfcReader } from "@/contexts/NfcReaderContext";

export default function ConnectDisconnectButton() {
  const { status, connect, disconnect } = useNfcReader();

  const toggleConnection = () => {
    if (status === "connected") {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <button
      onClick={toggleConnection}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white w-full"
    >
      {status === "connected" ? "Disconnect" : "Connect"}
    </button>
  );
}
