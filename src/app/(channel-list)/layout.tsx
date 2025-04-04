'use client'

import { Channel } from '@/lib/googlesheets'
import { useEffect, useState } from 'react'
import { ChannelListContext } from './context'

export default function ChannelListLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [channels, setChannels] = useState<Channel[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/channels')
      const result = await response.json()
      setChannels(result)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start m-4 ">
      <ChannelListContext.Provider value={{ channels, loading }}>
        {children}
      </ChannelListContext.Provider>
    </main>
  )
}
