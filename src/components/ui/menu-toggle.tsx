'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type MenuToggleProps = React.ComponentProps<'svg'> & {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function MenuToggle({
    open,
    onOpenChange,
    className,
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 2.5,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    ...props
}: MenuToggleProps) {
    return (
        <label className="flex cursor-pointer items-center justify-center p-2">
            <input className="hidden" type="checkbox" onChange={() => onOpenChange(!open)} checked={open} />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
                className={cn('transition-all duration-300 ease-in-out', className)}
                {...props}
            >
                <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={cn('transition-all duration-300 origin-center', open && 'translate-y-[6px] rotate-45')}
                />
                <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={cn('transition-all duration-300', open && 'opacity-0 translate-x-3')}
                />
                <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={cn('transition-all duration-300 origin-center', open && '-translate-y-[6px] -rotate-45')}
                />
            </svg>
        </label>
    );
}
