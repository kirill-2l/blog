import { Flex, FlexProps } from '@/shared/ui/Stack/Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: HStackProps) => (
    <Flex {...props} direction="column" />
);
