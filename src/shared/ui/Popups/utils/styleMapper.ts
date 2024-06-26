import { DropdownDirection } from '@/shared/types/ui';
import cls from '../styles/popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom-left': cls.optionsBottomLeft,
    'bottom-right': cls.optionsBottomRight,
    'top-left': cls.optionsTopLeft,
    'top-right': cls.optionsTopRight,
};
