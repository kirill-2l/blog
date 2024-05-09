import { IFeatureFlags } from '@/shared/libs/features/featureFlags.types';
import { FeatureFlags } from '@/shared/libs/features/featureFlags.singleton';

interface ToggleFeatureFlagOptions<T> {
    name: keyof IFeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatureFlag = <T>(options: ToggleFeatureFlagOptions<T>) => {
    const { off, on, name } = options;
    const featureFlags = FeatureFlags.getInstance().getFlag(name);
    if (featureFlags) {
        return on();
    }
    return off();
};
