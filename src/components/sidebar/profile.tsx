import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/iTzRodz.png"
        alt=""
        className="size-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Rodolfo Carvalho
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          rodolfo@meial.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500 " />
      </Button>
    </div>
  )
}
