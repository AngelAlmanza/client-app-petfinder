import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export const StartPage = () => {
  const token = useAppSelector(state => state.auth.token);

  if (token.length > 0) {
    return (
      <Navigate to="/home" replace />
    )
  }

  return (
    <div className="w-screen h-full pt-10 min-h-screen gradient-background">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-center text-black text-5xl font-bold mb-4">PetFinder</h1>
        <div className="w-64 h-64 bg-indigo-950 rounded-full"></div>
      </div>
    </div>
  )
}
