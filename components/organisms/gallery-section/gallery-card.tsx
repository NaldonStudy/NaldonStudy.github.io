'use client'

import { useState, memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ImageIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { withBasePath } from '@/lib/utils'
import { GalleryItem } from './gallery-data'

interface GalleryCardProps {
  item: GalleryItem
  index: number
  onClick: () => void
}

export const GalleryCard = memo(({
  item,
  index,
  onClick,
}: GalleryCardProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full flex flex-col w-full"
    >
      <Card
        className="group cursor-pointer overflow-hidden border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col w-full flex-1 shadow-md dark:shadow-black/50"
        onClick={onClick}
      >
        <CardContent className="p-0 flex flex-col h-full w-full flex-1">
          <div className="relative aspect-video overflow-hidden shrink-0">
            {item.type === 'youtube' ? (
              <>
                {item.thumbnail && !imageError ? (
                  <Image
                    src={withBasePath(item.thumbnail!)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <Play className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white ml-1 fill-white" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {!imageError ? (
                  <Image
                    src={withBasePath(item.src)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </div>
          
          <div className="p-4 flex flex-col justify-between flex-1 bg-card min-h-[5.5rem]">
            <h4 className="text-sm font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            {item.description ? (
              <p className="text-xs font-medium text-foreground/80 dark:text-slate-300 line-clamp-2 mt-1.5 leading-relaxed min-h-[2.25rem]">
                {item.description}
              </p>
            ) : (
              <div className="min-h-[2.25rem]" />
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})
GalleryCard.displayName = 'GalleryCard'
