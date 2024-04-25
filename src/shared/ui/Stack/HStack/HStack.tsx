import { Flex, FlexProps } from '@/shared/ui/Stack';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => (
    <Flex {...props} direction="row" />
);
