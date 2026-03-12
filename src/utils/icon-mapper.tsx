import * as LucideIcons from 'lucide-react';

export const getIconComponent = (iconName?: string) => {
  if (!iconName) {
    return LucideIcons.Calendar;
  }
  
  // @ts-ignore - Dynamic icon access
  const IconComponent = LucideIcons[iconName];
  
  return IconComponent || LucideIcons.Calendar;
};
