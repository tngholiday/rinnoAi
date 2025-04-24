import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const LucideIcon = (LucideIcons as any)[name.charAt(0).toUpperCase() + name.slice(1)];
  
  if (!LucideIcon) {
    console.warn(`Icon ${name} not found`);
    return <span className={className}>Icon not found</span>;
  }
  
  return <LucideIcon className={className} size={size} />;
};