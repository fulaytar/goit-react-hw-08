import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div>
      Тут буде навігація, AppBar
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
