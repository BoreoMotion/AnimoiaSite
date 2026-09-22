import { cn } from '@/lib/utils'

type MaskIconProps = {
  src: string
  className?: string
  label?: string
}

export function MaskIcon({ src, className, label }: MaskIconProps) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn('mask-icon size-4 shrink-0', className)}
      style={{ ['--icon' as string]: `url(${src})` }}
    />
  )
}
