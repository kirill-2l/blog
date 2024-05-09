import { IFeatureFlags } from '@/shared/libs/features/featureFlags.types';

export class FeatureFlags {
    // eslint-disable-next-line no-use-before-define
    private static instance: FeatureFlags;

    protected flags: IFeatureFlags;

    private constructor() {
        this.flags = {};
    }

    getFlag(name: keyof IFeatureFlags) {
        return this.flags[name];
    }

    public static getInstance(): FeatureFlags {
        if (!FeatureFlags.instance) {
            FeatureFlags.instance = new FeatureFlags();
        }

        return FeatureFlags.instance;
    }
}
