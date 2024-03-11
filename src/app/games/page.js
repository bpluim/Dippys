import { TicTacToe } from "@/components/TicTacToe"

export default function Games() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-white dark:bg-black">
      <div className="games-body">
        <TicTacToe />
      </div>
    </main>
  )
}