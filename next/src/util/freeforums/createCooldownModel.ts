import { Schema } from "mongoose";
import type { CooldownType } from '../../../../demdevvyshared/src/freeforums';

const createCooldownSchema = (cooldownInSeconds: number) => {
    return new Schema<CooldownType>({
        ip: {
            type: String,
            requried: true,
        },
        expiresAt: {
            type: Date,
            default: () => Date.now() + 1000 * cooldownInSeconds,
        },
        index: { expires: cooldownInSeconds }
    });
}

export default createCooldownSchema;