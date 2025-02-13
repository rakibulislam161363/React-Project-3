import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const Cn = (...imputs) => twMerge(clsx(...imputs));